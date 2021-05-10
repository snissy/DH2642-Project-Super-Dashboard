const pointInPolygon = require('point-in-polygon');

const okSMHICoords = [ [ 2.250475, 52.500440 ], [ 27.348870, 52.547483 ], [ 37.848053, 70.740996 ], [ -8.541278, 70.655722] ];

function okCoords(lat, long) {

    return pointInPolygon([long, lat], okSMHICoords)
}

export default okCoords;
