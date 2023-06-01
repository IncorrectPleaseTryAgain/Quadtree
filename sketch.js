/*
* Author:
    Michael Steenkamp

* Date:
    02-06-2023

* Title:
    Quadtree | p5.js Independent

* Description:
    This is an implementation of the Quadtree datastructure. This implementation is solely dependent on JavaScript and p5.js is only used for visualization purposes.
    
* Resources:
  https://en.wikipedia.org/wiki/Quadtree#:~:text=A%20quadtree%20is%20a%20tree,into%20four%20quadrants%20or%20regions.
  https://www.youtube.com/watch?v=xFcQaig5Z2A
  https://www.youtube.com/watch?v=OJxEcs0w_kE&t=1909s
  https://www.youtube.com/watch?v=QQx_NmCIuCY
*/

function setup() {
  createCanvas(400, 400);
  background(0);

  this.boundaryRect = new BoundaryRect(width / 2, height / 2, width / 2, height / 2);
  this.quadtree = new Quadtree(boundaryRect);

  const numPoints = 1000;
  for (let i = 0; i < numPoints; i++) {
    this.quadtree.insert(new Point(random(width), random(height)));
  }
  this.quadtree.p5jsRender();

  const range = new BoundaryRect(random(width), random(height), 25, 25);
  const pointsFound = this.quadtree.queryRange(range);

  //p5.js: optional visualization
  push();
  rectMode(CENTER);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);

  rect(range.x, range.y, range.w * 2, range.h * 2);


  pointsFound.forEach(pnt => {
    strokeWeight(5);
    point(pnt.x, pnt.y);
  })
  pop();

}
