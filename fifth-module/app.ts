// #1. Decorator
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        readonly createdAt = new Date()
    }
}

// #2. Course class
@CreatedAt
class Course {
    name: string = 'Typescript'
    excerpt: string = 'Learn Typescript from scratch'
}

// #3. Lesson class
@CreatedAt
class Lesson {
    name: string = 'What is Typescript?'
    content: string = 'Introduction to Typescript'
}

// #4. Type assertion
type CreatedEntity = { createdAt: Date }

const course = new Course() as Course & CreatedEntity
const lesson = new Lesson() as Lesson & CreatedEntity

console.log(course)
console.log(lesson)
