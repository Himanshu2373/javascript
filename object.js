//  use factory function for object creation

function createRectangle(length, width) {
  return (rectangle = {
    // lengt:2,
    // width:3,
    length,
    width,
    draw() {
      document.write(
        `Drawing a rectangle with length ${this.length} and width ${this.width}`
      );
    },
  });
}
// var rect = createRectangle();
// rect.draw(); // Output : Drawing a rectangle with length 2 and width 3

var rectangleObj = createRectangle(4, 5);
rectangleObj.draw();

//  use of constructor  function instead of factory functions for object creation

function Rectangle() {
  this.length = 2;
  this.breadth = 3;
  this.draw1 = function () {
    console.log("drawing");
  };
}

let RectangleObj = new Rectangle();
// RectangleObj.draw1();

// add prperties
RectangleObj.color = "red";
RectangleObj.draw1();

// remove properties
delete RectangleObj.color;
RectangleObj.draw1();
