class Shape {
  constructor(name) {
    this.name = name;
  }

  getAreaShape(area) {
    console.log(`Calculating area of ${this.name} is equal to: ${area}`);
  }
  getPerimeterShape(perimeter) {
    console.log(
      `Calculating perimeter of ${this.name} is equal to: ${perimeter}`
    );
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super("circle");
    this.radius = radius;
  }

  getArea() {
    this.getAreaShape(Math.round(Math.PI * this.radius ** 2));
  }

  getPerimeter() {
    this.getAreaShape(Math.round(2 * Math.PI * this.radius));
  }
}

class Rectangle extends Shape {
  constructor(x, y) {
    super("rectangle");
    this.x = x;
    this.y = y;
  }

  getArea() {
    this.getAreaShape(this.x * this.y);
  }

  getPerimeter() {
    this.getAreaShape(this.x * 2 + this.y * 2);
  }
}

class Triangle extends Shape {
  constructor(x, y, z) {
    super("triangle");
    this.x = x;
    this.y = y;
    this.z = z;
    this.geronP = (x + y + z) / 2;
  }

  getArea() {
    console.log(this.geronP);
    this.getAreaShape(
      Math.round(
        Math.sqrt(
          this.geronP *
            ((this.geronP - this.x) *
              (this.geronP - this.y) *
              (this.geronP - this.z))
        ) * 10
      ) / 10
    );
  }

  getPerimeter() {
    this.getAreaShape(this.x + this.y + this.z);
  }
}

let circle = new Circle(1, 2, 3);
let rectangle = new Rectangle(2, 3);
let triangle = new Triangle(5, 6, 7);
circle.getArea();
rectangle.getArea();
triangle.getArea();
circle.getPerimeter();
rectangle.getPerimeter();
triangle.getPerimeter();
