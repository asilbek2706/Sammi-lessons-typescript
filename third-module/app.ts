interface IAnimal {
    makeSound(): void
    move(): void
}

interface IBird{
    fly(): void
}

abstract class Animal {
    constructor(public name: string) {}

    abstract makeSound(): void

    move(): void {
        console.log(`Moving ${this.name} `)
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('meow-meow')
    }
}

const cat = new Cat('Kitty')
cat.move()
cat.makeSound()
