/*
Methods
Methods are like functions that are associated with a particular object.

They are especially helpful when you want to either:

Update the object properties
Calculate something based on an object's properties.
Here, we have included a Circle object, with a radius property representing the circle's radius.
We have implemented an area function which calculates the circle's area. Notice we have used Math.PI to get the π value.
*/

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;

    };
    // define a perimeter method here
    this.perimeter = function () {
        return 2*Math.PI*this.radius;
    };

}
