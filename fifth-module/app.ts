interface IShape {
    name: string
    getValue(): string
}

/*function Logger(constructor: Function) {
    console.log(`Class created: ${constructor.name}`)
}

function FirstDecorator(constructor: Function) {
    console.log(`First Decorator: ${constructor.name}`)
}

@FirstDecorator
@Logger*/

function ChangeShape(constructor: Function) {
    constructor.prototype.name =  'Triangle'
    constructor.prototype.color =  '#ff0000'
}

@ChangeShape
class Circle implements IShape {
    name: string = 'circle'

    constructor() {
        console.log('Circle created')
    }

    getValue(): string {
        return this.name
    }
}

const shape = new Circle()
console.log(shape)
// @ts-ignore
console.log(shape.color)


//
// function nullShape(shape: IShape) {
//     shape.name = 'null'
//     return shape
// }
//
// const shape = nullShape(changeShape(new Circle()))
// console.log(shape)
