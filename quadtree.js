class Quadtree {
    constructor(boundary, capacity = 4) {
        this.boundary = boundary;
        this.capacity = capacity;

        this.pointsInBound = [];
        this.isSubDivided = false;
    }

    insert(point) {

        if (!this.boundary.containsPoint(point)) {
            return false;
        }

        if (this.pointsInBound.length < this.capacity) {
            this.pointsInBound.push(point);
            return true;
        } else {
            if (!this.isSubDivided) {
                this.subdivide();
            }

            if (this.northEastQuadrant.insert(point) ||
                this.northWestQuadrant.insert(point) ||
                this.southEastQuadrant.insert(point) ||
                this.southWestQuadrant.insert(point)) {

                return true;

            } else {
                console.log(`Failed: Inserting Point | quadtree.js line: 24 - 30\nPoint Pos: (${point.x} , ${point.y})`);
                return false;
            }
        }
    }

    subdivide() {

        this.northEastQuadrant =
            new Quadtree(
                new BoundaryRect(
                    this.boundary.x - (this.boundary.w / 2),
                    this.boundary.y + (this.boundary.h / 2),
                    this.boundary.w / 2, this.boundary.h / 2),
                this.capacity);

        this.northWestQuadrant =
            new Quadtree(
                new BoundaryRect(
                    this.boundary.x + (this.boundary.w / 2),
                    this.boundary.y + (this.boundary.h / 2),
                    this.boundary.w / 2, this.boundary.h / 2),
                this.capacity);

        this.southEastQuadrant =
            new Quadtree(
                new BoundaryRect(
                    this.boundary.x - (this.boundary.w / 2),
                    this.boundary.y - (this.boundary.h / 2),
                    this.boundary.w / 2, this.boundary.h / 2),
                this.capacity);

        this.southWestQuadrant =
            new Quadtree(
                new BoundaryRect(
                    this.boundary.x + (this.boundary.w / 2),
                    this.boundary.y - (this.boundary.h / 2),
                    this.boundary.w / 2, this.boundary.h / 2),
                this.capacity);

        this.isSubDivided = true;
    }

    queryRange(range, pointsInRange = []) {

        if (!this.boundary.overlaps(range)) {
            return pointsInRange;
        }

        this.pointsInBound.forEach((point) => {
            if (range.containsPoint(point)) {
                pointsInRange.push(point);
            }
        })

        if (this.isSubDivided) {
            this.northEastQuadrant.queryRange(range, pointsInRange);
            this.northWestQuadrant.queryRange(range, pointsInRange);
            this.southEastQuadrant.queryRange(range, pointsInRange);
            this.southWestQuadrant.queryRange(range, pointsInRange);
        }

        return pointsInRange;
    }

    //p5.js: optional visualization
    p5jsRender() {
        stroke(255);
        noFill();
        strokeWeight(1);
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);
        if (this.isSubDivided) {
            this.northEastQuadrant.p5jsRender();
            this.northWestQuadrant.p5jsRender();
            this.southEastQuadrant.p5jsRender();
            this.southWestQuadrant.p5jsRender();
        }

        this.pointsInBound.forEach((p) => {
            strokeWeight(5);
            point(p.x, p.y);
        })
    }
}