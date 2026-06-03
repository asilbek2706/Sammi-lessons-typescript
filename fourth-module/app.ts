class Shape<T, U> {
    private content: T
    private radius: U

    constructor(content: T, radius: U) {
        this.content = content
        this.radius = radius
    }

    getValue(){
        return this.content
    }

    getRadius(){
        return this.radius
    }
}

const shape = new Shape<string, number>('Hello', 20)
console.log(shape.getValue())
console.log(shape.getRadius())

const shape2 = new Shape<number, string>(50, '42deg')
console.log(shape2.getValue())
console.log(shape2.getRadius())