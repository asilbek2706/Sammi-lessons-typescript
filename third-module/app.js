"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Role enum
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["STUDENT"] = "STUDENT";
})(Role || (Role = {}));
//User class
class User {
    id;
    name;
    role;
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
//Course class
class Course {
    students = [];
    id;
    title;
    description;
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    // Getter - students list
    get studentList() {
        return this.students.map((student) => student.name).join(', ');
    }
    // Add student to course
    enrollStudent(student) {
        if (student.role === Role.STUDENT) {
            this.students.push(student);
            console.log(`Student ${student.name} enrolled in course ${this.title}`);
        }
        else {
            console.log('Only students can be enrolled in course');
        }
    }
}
class Admin extends User {
    constructor(id, name) {
        super(id, name, Role.ADMIN);
    }
    // Add course
    addCourse(course, courses) {
        courses.push(course);
        console.log(`Course ${course.title} added!`);
    }
    // Student List of course
    getStudentList(course) {
        console.log(`Students in course ${course.title}: ${course.studentList}`);
    }
    // get single course
    getCourse(courseId, courses) {
        const course = courses.find((course) => course.id === courseId);
        return course;
    }
}
class Student extends User {
    constructor(id, name) {
        super(id, name, Role.STUDENT);
    }
    enroll(course) {
        course.enrollStudent(this);
    }
}
// Backtest
const courses = [];
const admin = new Admin(101, 'Admin');
const student1 = new Student(201, 'Ali');
const student2 = new Student(202, 'Osman');
const course1 = new Course(101, 'Math', 'Math course');
admin.addCourse(course1, courses);
student1.enroll(course1);
student2.enroll(course1);
admin.getStudentList(course1);
const findingCourse = admin.getCourse(101, courses);
if (findingCourse) {
    console.log(`Course found: ${findingCourse.title} - ${findingCourse.description}`);
}
else {
    console.log('Course not found!');
}
const noCourse = admin.getCourse(999, courses);
console.log(`Course not found: ${noCourse}`);
//# sourceMappingURL=app.js.map