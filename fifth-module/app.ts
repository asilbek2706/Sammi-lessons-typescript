interface IShape {
    name: string
    getValue(): string
}

function ChangeShape<TBase extends { new (...args: any[]): {} }>(constructor: TBase) {
    return class extends constructor {
        name: string = 'Triangle'
        color: string = 'red'
        getInfo() {
            return this.name + ':' + this.color
        }
    }
}

function WithVersion(version: '1.0.0' | '2.0.0') {
    return function <TBase extends { new (args: any[]): {} }>(constructor: TBase) {
        return class extends constructor {
            version: string = version
        }
    }

    // return function(constructor: Function){
    //     console.log(`${version} - ${constructor.name}`)
    // }
}

@ChangeShape
@WithVersion('2.0.0')
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
