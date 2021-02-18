    function Point(x, y) {
       let d = Object.create(Point.prototype);
       d.x = x;
       d.y = y;
       return d
    }
    Point.prototype.getDistance = function(otherPoint){
       var Dx = (this.x - otherPoint.x) ** 2;
       var Dy = (this.y - otherPoint.y) ** 2;
       var d = Dx + Dy;
       d = Math.sqrt(d);
       return d
    }
    var pointA = Point(3, 6);
    var pointB = Point(5, 8);
    var distanceAB = pointA.getDistance(pointB);
    console.log(distanceAB)