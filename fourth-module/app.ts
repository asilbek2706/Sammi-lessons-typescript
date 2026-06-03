// Form Validation

// #1. Data type
type FormDataType = {
    name: string
    email: string
    password: string
}

// #2. Error type
type FormErrorType = {
    email?: string
    password?: string
    name?: string
}

// #3. Form Validation Function
function validateForm<T extends FormDataType>(form: T): FormErrorType {
    const errors: FormErrorType = {}

    // Email validation
    if (!form.email) {
        errors.email = 'Email is required'
    } else if (form.email.includes('@') === false) {
        errors.email = 'Email is invalid'
    }

    // Password validation
    if (!form.password) {
        errors.password = 'Password is required'
    } else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
    }

    // Name validation
    if (!form.name) {
        errors.name = 'Name is required'
    } else if (form.name.length < 3) {
        errors.name = 'Name must be at least 3 characters'
    }

    return errors
}

// #4. Testing
const formData: FormDataType = {
    email: 'test@gmail.com',
    password: '456',
    name: 'Te',
}

const erors = validateForm(formData)
console.log(erors)

// #5. Conditional type
type IsEmailValid<T> = T extends { email: string } ? boolean : never

function isEmailValid<T extends FormDataType>(form: T): IsEmailValid<T> {
    return form.email.includes('@') as IsEmailValid<T>
}

const isValidEmail = isEmailValid(formData)
console.log(isValidEmail)

// #6. Dynamic fields
type DynamicFormData = {
    [key: string]: string
}

function validateDynamicForm<T extends DynamicFormData>(form: T): FormErrorType {
    const errors: FormErrorType = {}

    Object.keys(form).forEach((key) => {
        if (!form[key]) {
            errors[key] = `${key} is required`
        }
    })

    return errors
}

const dynamicFormData = {
    email: 'test@gmail.com',
    password: '',
    name: '',
    customId: '',
}

const dynamicErrors = validateDynamicForm(dynamicFormData)
console.log(dynamicErrors)