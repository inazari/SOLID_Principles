class Shape {
    aria() {
        throw new Error('Aria method should be implement')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size;
    }

    aria() {
        return this.size * 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    aria() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    aria() {
        return this.width * this.height
    }
}

class AriaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            return shape.aria() + acc;
        }, 0)
    }
}

const calc = new AriaCalculator([
    new Circle(2),
    new Square(7),
    new Rect(2, 5)
])

console.log(calc.sum());
