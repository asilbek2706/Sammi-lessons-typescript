/*
type Constructor<T = {}> = new (...args: any[]) => T

function Drawhape<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        draw() {
            console.log('Draw')
        }
    }
}

function FillShape<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        fill() {
            console.log('Fill')
        }
    }
}

class Shape {}

const MixedShape = FillShape(Drawhape(Shape))

class Circle extends MixedShape {}

const circle = new Circle()
circle.draw()
circle.fill()*/

// #1. Generic constructor type
type Constructor<T = {}> = new (...args: any[]) => T

// #2. Logger mixin
function CanLog<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        log(message: string) {
            console.log(`[LOG]: ${message}`)
        }
    }
}
// #3. Access Control Mixin
function CanAccess<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        role: string = 'guest'

        setRole(role: string) {
            this.role = role
        }

        canAccess(requiredRole: string): boolean {
            return this.role === requiredRole
        }
    }
}

// #4. Validation mixin
function CanValidate<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        isValidEmail(email: string): boolean {
            return email.includes('@')
        }

        isNotEmpty(value: string): boolean {
            return value.trim().length > 0
        }
    }
}

// #5. Create Base class
class BaseService {}

// #6. Mixin all the features
const MixedService = CanValidate(CanAccess(CanLog(BaseService)))

// #7. User Service class
class UserService extends MixedService {
    createUser(email: string, name: string) {
        if (!this.isValidEmail(email)) {
            this.log('Invalid email address')
            return
        }

        if (!this.isNotEmpty(email)) {
            this.log('Email is required')
            return
        }

        if (!this.isNotEmpty(name)) {
            this.log('Name is required')
            return
        }

        // if (this.canAccess('admin')) {
        //     this.log('You can access the admin')
        // } else if (this.canAccess('user')) {
        //     this.log('You can access the user')
        // } else {
        //     this.log('Access denied')
        // }

        if (this.canAccess('admin')) {
            this.log(`Admin crated: ${name} (${email})`)
        } else if (this.canAccess('user')) {
            this.log(`User crated ${name} (${email})`)
        } else {
            this.log('Access denied')
        }
    }
}

// #8. Create an instance of UserService
const userService = new UserService()

userService.setRole('user')
userService.createUser('user@gmail.com', 'Ali')

userService.setRole('admin')
userService.createUser('admin@gmail.com', 'Asilbek')
