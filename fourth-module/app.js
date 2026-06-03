"use strict";
// Form Validation
Object.defineProperty(exports, "__esModule", { value: true });
// #3. Form Validation Function
function validateForm(form) {
    const errors = {};
    // Email validation
    if (!form.email) {
        errors.email = 'Email is required';
    }
    else if (form.email.includes('@') === false) {
        errors.email = 'Email is invalid';
    }
    // Password validation
    if (!form.password) {
        errors.password = 'Password is required';
    }
    else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    // Name validation
    if (!form.name) {
        errors.name = 'Name is required';
    }
    else if (form.name.length < 3) {
        errors.name = 'Name must be at least 3 characters';
    }
    return errors;
}
// #4. Testing
const formData = {
    email: 'test@gmail.com',
    password: '456',
    name: 'Te',
};
const erors = validateForm(formData);
console.log(erors);
function isEmailValid(form) {
    return form.email.includes('@');
}
const isValidEmail = isEmailValid(formData);
console.log(isValidEmail);
function validateDynamicForm(form) {
    const errors = {};
    Object.keys(form).forEach((key) => {
        if (!form[key]) {
            errors[key] = `${key} is required`;
        }
    });
    return errors;
}
const dynamicFormData = {
    email: 'test@gmail.com',
    password: '',
    name: '',
    customId: '',
};
const dynamicErrors = validateDynamicForm(dynamicFormData);
console.log(dynamicErrors);
//# sourceMappingURL=app.js.map