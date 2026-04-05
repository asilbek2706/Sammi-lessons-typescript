"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_interface_1 = require("./interface/user.interface");
function isAdmin(user) {
    return user.role === user_interface_1.Role.ADMIN;
}
const courses = [];
function addCourse(user, course) {
    if (isAdmin(user)) {
        courses.push(course);
        console.log(`Course added: ${course.title}`);
    }
    else {
        console.log('Only admin can add course');
    }
}
function enrollStudent(user, courseId) {
    const course = courses.find((course) => course.id === courseId);
    if (!course) {
        console.log('Course not found.');
        return;
    }
    if (user.role === user_interface_1.Role.STUDENT) {
        course.students.push(user);
        console.log(`Student enrolled ${user.name}`);
    }
    else {
        console.log('Only students can enroll');
    }
}
function listStudent(user, courseId) {
    if (!isAdmin(user)) {
        console.log('Only admin can see students list');
        return;
    }
    const course = courses.find((course) => course.id === courseId);
    if (!course) {
        console.log('Course not found.');
        return;
    }
    console.log(`Students is ${course.title}: ${course.students.map(c => c.name).join(', ')}`);
}
// Data
const admin = { id: 1, name: 'Admin', role: user_interface_1.Role.ADMIN };
const student1 = { id: 2, name: 'Ali', role: user_interface_1.Role.STUDENT };
const student2 = { id: 3, name: 'Osman', role: user_interface_1.Role.STUDENT };
const course = {
    id: 101,
    title: 'Math',
    description: 'Math courses',
    students: [],
};
// Call functions
addCourse(admin, course);
enrollStudent(student1, course.id);
enrollStudent(student2, course.id);
listStudent(admin, course.id);
console.log(courses);
//# sourceMappingURL=app.js.map