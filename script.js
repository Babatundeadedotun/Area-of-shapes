function area_of_triangle() {
    //Area Of Triangle
var baseOfTriangle = prompt("Enter the value of the triangle base");
var heightOfTriangle = prompt("Enter the value of the triangle height");
var areaOfTriangle = 1/2 * baseOfTriangle * heightOfTriangle;
console.log("Area of the Triangle is" + " " + areaOfTriangle + "cm^2");
document.getElementById('areaOfTriangle').innerHTML = "Area of Triangle is" + " " + areaOfTriangle + "cm^2";
}


function area_of_square() {
//Area Of Square
var sideOfSquare = prompt("Enter the value of the square side");
var areaOfSquare = sideOfSquare ** 2;
console.log("Area of the Square is" + " " + areaOfSquare + "cm^2");
document.getElementById('areaOfSquare').innerHTML = "Area of Square is" + " " + areaOfSquare + "cm^2";
}

function area_of_circle(){
//Area of Circle
const pi = 3.142;
var radiusOfCircle = prompt("Enter the radius of the circle");
var areaOfCircle = pi * (Number(radiusOfCircle)**2);
console.log("Area of Circle is" + " " + areaOfCircle + "m^2");
document.getElementById('areaOfCircle').innerHTML = "Area of Circle is" + " " + areaOfCircle + "m^2";
}

function area_of_quadilateral() {
//Area of Quadilateral
var baseOfQuadilateral = prompt("Enter the Base of the Quadilateral");
var heightOfQuadilateral = prompt("Enter the height of the Quadilateral");
var areaOfQuadilateral = baseOfQuadilateral * heightOfQuadilateral;
console.log("area of Quadilateral is" + " " + areaOfQuadilateral + "m^2");
document.getElementById('areaOfQuadilateral').innerHTML = "Area of Quadilateral is" + " " + areaOfQuadilateral + "m^2";
}

function area_of_rhombus() {
//Area of Rhombus
var firstDiagonalOfRhombus = prompt("Enter the value of the first diagonal of the Rhombus");
var secondDiagonalOfRhombus = prompt("Enter the value of the second diagonal of the Rhombus")
var areaOfRhombus = 1/2 * firstDiagonalOfRhombus * secondDiagonalOfRhombus;
console.log("Area of Rhombus is" + " " + areaOfRhombus + "cm^2");
document.getElementById('areaOfRhombus').innerHTML = "Area of Rhombus is" + " " + areaOfRhombus + "cm^2";
}


function area_of_trapezium() {
//Area of Trapezium 1/2 * sum of parallel sides * distance between them
var firstParallelSide = prompt("Enter the value of the first parallel side of the trapezium");
var secondParallelSide = prompt("Enter the value of the second parallel side of the Trapezium");
var distanceBetweenThem = prompt("Enter the value of the distance between parallel sides of the trapezium");
var areaOfTrapezium = 1/2 * (Number(firstParallelSide) + Number(secondParallelSide)) * distanceBetweenThem;
console.log("Area of Trapezium is" + " " + areaOfTrapezium + "cm^2");
document.getElementById('areaOfTrapezium').innerHTML = "Area of Trapezium is" + " " + areaOfTrapezium + "cm^2";
}


function area_of_parallelogram() {
//Area of parallelogram b * h
var baseOfParallelogram = prompt("Enter the value of the base of the parallelogram");
var heightOfParallelogram = prompt("Enter the value of the height of the parallelogram");
var areaOfParallelogram = baseOfParallelogram * heightOfParallelogram;
console.log("Area Of Parallelogram is" + " " + areaOfParallelogram + "cm^2");
document.getElementById('areaOfParallelogram').innerHTML = "Area of Parallelogram is" + " " + areaOfParallelogram + "cm^2";
}


function body_mass_index() {
//body mass index weight/height (kg/m^2)
var weightOfBody = prompt("Enter the value of the weight of the body");
var heightOfBody = prompt("Enter the value of the height of the body");
var bodyMassIndex = weightOfBody/(heightOfBody**2);
console.log("Body Mass Index is" + " " + bodyMassIndex + "kg/m^2");
document.getElementById('bodyMassIndex').innerHTML = "Body Mass Index is" + " " + bodyMassIndex + "kg/m^2";
}
