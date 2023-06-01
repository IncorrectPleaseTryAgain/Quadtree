
// x & y are origin points at center of rectangle
// w & h are the radius lengths from origin
class BoundaryRect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    containsPoint(point) {
        return (point.x >= (this.x - this.w) &&
            point.y >= (this.y - this.h) &&
            point.x <= (this.x + this.w) &&
            point.y <= (this.y + this.h));
    }

    overlaps(range) {
        return !(range.x - range.w > this.x + this.w ||
            range.x + range.w < this.x - this.w ||
            range.y - range.h > this.y + this.h ||
            range.y + range.h < this.y - this.h);
    }
}