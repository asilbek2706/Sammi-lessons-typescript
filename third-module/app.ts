/*
class Animal {
    id: number
    name: string

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }

    speak() {
        this.id = 10 * this.id
        console.log(`${this.id} ${this.name} makes a sound!`)
    }

    showInfo(){
        console.log(`Name: ${this.name}, ID: ${this.id}`)
    }
}

class Cat extends Animal {
    constructor(name: string) {
        const id = Math.random()
        super(name, id)
    }

    override speak(){
        super.speak()
        console.log(`${this.name} meows...`)
    }

}

const cat = new Cat('cat')
cat.speak()
cat.showInfo()
*/


class Shape{
    color: string

    constructor(color: string) {
        this.color = color
    }

    describe(){
        console.log(`This shape is ${this.color}`)
    }
}

class Circle extends Shape {
    radius: number

    constructor(color: string, radius: number) {
        super(color)
        this.radius = radius
    }

    area() {
        const area = Math.PI * this.radius ** 2
        console.log(area)
    }

    override describe() {
        super.describe()
        console.log(`This circle has a radius of ${this.radius}`)
    }
}

const circle  = new Circle('red', 10)
circle.describe()
circle.area()