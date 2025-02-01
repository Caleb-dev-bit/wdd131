const PI = 3.14;
const radius = 3;
let area = 0;

function circleArea(radius) {
    return radius * radius * PI;
}

area = circleArea(radius);

console.log("area is: " + area);

