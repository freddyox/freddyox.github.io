class Point{
    constructor(x,y){
	this.x=x;
	this.y=y;
    }
}

class Rectangle{
    constructor(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
    }
    contains(point){
	return( point.x >= this.x - this.w &&
		point.x <= this.x + this.w &&
		point.y >= this.y - this.h &&
		point.y <= this.y + this.h );
    }

    intersects(range){
	return !(range.x - range.w > this.x + this.w ||
		 range.x + range.w < this.x - this.w ||
		 range.y - range.h > this.y + this.h ||
		 range.y + range.h < this.y - this.h )
    }
    
}
class QuadTree{
    constructor(boundary,n){ // boundary is a rectangle
	this.boundary = boundary;
	this.capacity = n;
	this.points = [];
	this.divided = false;
    }
    
    // Our recursive divide function
    subdivide(){
	this.divided = true;
	let x = this.boundary.x;
	let y = this.boundary.y;
	let w = this.boundary.w;
	let h = this.boundary.h;

	let ne = new Rectangle(x+0.5*w, y-0.5*h, 0.5*w, 0.5*h);
	let se = new Rectangle(x+0.5*w, y+0.5*h, 0.5*w, 0.5*h);
	let sw = new Rectangle(x-0.5*w, y+0.5*h, 0.5*w, 0.5*h);
	let nw = new Rectangle(x-0.5*w, y-0.5*h, 0.5*w, 0.5*h);
	this.northeast = new QuadTree(ne, this.capacity);
	this.southeast = new QuadTree(se, this.capacity);
	this.southwest = new QuadTree(sw, this.capacity);
	this.northwest = new QuadTree(nw, this.capacity);
    }
    
    insert(point){
	if( !this.boundary.contains(point) ){
	    return false
	}
	
	if(this.points.length < this.capacity){
	    this.points.push(point);
	    return true;
	} else {
	    if(!this.divided){
		this.subdivide();
	    }
	    if(      this.northeast.insert(point) ) return true;
	    else if( this.southeast.insert(point) ) return true;
	    else if( this.southwest.insert(point) ) return true;
	    else if( this.northwest.insert(point) ) return true;
	}
    }

    query(range, found){
	if( !found ) found = [];
	
	if(!this.boundary.intersects(range)){
	    return;
	} else {
	    for( let p in this.points ){
		if( range.contains(p) ){
		    found.push(p);
		}
	    }
	    if( this.divided ){
		this.northwest.query(range, found);
		this.northeast.query(range, found);
		this.southwest.query(range, found);
		this.southeast.query(range, found);
	    }
	    return found;
	}
    }
    
    show() {
	stroke(255);
	//strokeWeight(2);
	noFill();
	rectMode(CENTER);
	rect(this.boundary.x, this.boundary.y,
	     this.boundary.w*2, this.boundary.h*2);
	if(this.divided){
	    this.northwest.show();
	    this.northeast.show();
	    this.southeast.show();
	    this.southwest.show();
	}
    }
}

var winx = 500, winy = 500;
let qtree;
let balls = [];
let Nballs = 100;
let radius = 4;
var simulate;

class Ball{
    constructor(x,y,vx,vy){
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
    }
    move(){
	this.x += this.vx * 1/30;
	this.y += this.vy * 1/30;
	if( this.x - radius < 0 )      this.vx *= -1;
	if( this.x + radius > width )  this.vx *= -1;
	if( this.y - radius < 0 )      this.vy *= -1;
	if( this.y + radius > height ) this.vy *= -1;
    }
    intersects(other){
	let d = dist(this.x, this.y, other.x, other.y);
	return (d<2*radius);
    }
}

function setup() {
    simulate = true;
    frameRate(30);
    canvas = createCanvas(winx, winy);
    canvas.parent('mysketch');
    for(let p=0; p<Nballs; p++){
	let btemp = new Ball(random(5,width-radius), random(5,height-radius),
			     random(-50,50), random(-50,50) );
	balls[p] = btemp;
    }
}

function draw(){
    background(0);
    
    let boundary = new Rectangle(0.5*winx, 0.5*winy, 0.5*winx, 0.5*winy);
    qtree = new QuadTree(boundary,1);
    for(let p=0; p<balls.length; p++){
	//strokeWeight(2);
	if(simulate) balls[p].move();
	/*let range = new Rectangle(balls[p].x,balls[p].y,3*radius,3*radius);
	let temp = qtree.query(range);
	let neighbors = [];
	for(let n of temp){
	    let btemp = new Ball(temp[n].x, temp[n].y, radius, radius);
	    neighbors[n] = btemp;
	}	   
	for(let n of neighbors){
	    if( balls[n] != neighbors[n] &&
		balls[n].intersects(neighbors[n]) ) balls[n].fill(255,0,0);
	}*/
	ellipse(balls[p].x,balls[p].y,radius,radius);
	qtree.insert( new Point(balls[p].x,balls[p].y) );
    }
    qtree.show();
    
}
document.querySelector("button").addEventListener("click", function () {
    simulate = !simulate;
})
						  
