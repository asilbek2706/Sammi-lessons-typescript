import {type IUser, Role} from "./interface/user.interface";
import {ICourse} from "./interface/course.interface";

function isAdmin(user: IUser): user is IUser & {role: Role.ADMIN} {
    return user.role === Role.ADMIN
}

const courses: ICourse[] = []

function addCourse(user: IUser, course: ICourse) {
    if (isAdmin(user)) {
        courses.push(course)
        console.log(`Course added: ${course.title}`)
    } else {
        console.log('Only admin can add course')
    }
}

function enrollStudent(user: IUser, courseId: number) {
    const course = courses.find((course) => course.id === courseId)

    if (!course) {
        console.log('Course not found.')
        return
    }

    if(user.role === Role.STUDENT) {
        course.students.push(user)
        console.log(`Student enrolled ${user.name}`)
    } else {
        console.log('Only students can enroll')
    }
}

function listStudent(user: IUser, courseId: number) {
    if (!isAdmin(user)) {
        console.log('Only admin can see students list')
        return
    }

    const course = courses.find((course) => course.id === courseId)
    if (!course) {
        console.log('Course not found.')
        return
    }

    console.log(`Students is ${course.title}: ${course.students.map(c => c.name).join(', ')}`
    )
}


// Data
const admin: IUser = { id: 1, name: 'Admin', role: Role.ADMIN }
const student1: IUser = { id: 2, name: 'Ali', role: Role.STUDENT }
const student2: IUser = { id: 3, name: 'Osman', role: Role.STUDENT }

const course: ICourse = {
    id: 101,
    title: 'Math',
    description: 'Math courses',
    students: [],
}

// Call functions
addCourse(admin, course)

enrollStudent(student1, course.id)
enrollStudent(student2, course.id)

listStudent(admin, course.id)

console.log(courses)