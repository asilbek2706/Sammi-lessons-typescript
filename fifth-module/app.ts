function Logger(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function (...args: any[]) {
        console.log('Method not implemented')
        return args
    }
}

function Auth(role: 'admin' | 'user'){
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        if(role !== 'admin'){
            throw new Error("Only admins can use this action")
        }
        const originalMethod = descriptor.value
        descriptor.value = function (this: { isAdmin: boolean }, ...args: any[]) {
            if (!this.isAdmin) {
                console.log('Access denied. You are not an admin!')
                return
            }

            return originalMethod.apply(this, args)
        }
        return descriptor
    }
}

class User {
    constructor(
        public name: string,
        public age: number,
        public isAdmin: boolean
    ) {}

    @Logger
    greeting() {
        throw new Error('Method not implemented.')
    }

    @Auth('admin')
    deleteUser() {
        console.log('User is deleting...')
    }
}

const user = new User('Asilbek', 30, false)
user.greeting()
user.deleteUser()
