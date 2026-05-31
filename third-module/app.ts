// Role enum
enum Role {
    ADMIN = 'ADMIN',
    STUDENT = 'STUDENT',
}

//User class
class User {
    id: number
    name: string
    role: Role

    constructor(id: number, name: string, role: Role) {
        this.id = id
        this.name = name
        this.role = role
    }
}

//Course class
class Course {
    private students: User[] = []

    id: number
    title: string
    description: string

    constructor(id: number, title: string, description: string) {
        this.id = id
        this.title = title
        this.description = description
    }

    // Getter - students list
    get studentList(): string {
        return this.students.map((student) => student.name).join(', ')
    }

    // Add student to course
    enrollStudent(student: User): void {
        if (student.role === Role.STUDENT) {
            this.students.push(student)
            console.log(`Student ${student.name} enrolled in course ${this.title}`)
        } else {
            console.log('Only students can be enrolled in course')
        }
    }
}

class Admin extends User {
    constructor(id: number, name: string) {
        super(id, name, Role.ADMIN)
    }

    // Add course
    addCourse(course: Course, courses: Course[]): void {
        courses.push(course)
        console.log(`Course ${course.title} added!`)
    }

    // Student List of course
    getStudentList(course: Course): void {
        console.log(`Students in course ${course.title}: ${course.studentList}`)
    }

    // get single course
    getCourse(courseId: number, courses: Course[]): Course {
        const course = courses.find((course) => course.id === courseId)
        return course as Course
    }
}

class Student extends User {
    constructor(id: number, name: string) {
        super(id, name, Role.STUDENT)
    }

    enroll(course: Course): void {
        course.enrollStudent(this)
    }
}

// Backtest
const courses: Course[] = []
const admin = new Admin(101, 'Admin')

const student1 = new Student(201, 'Ali')
const student2 = new Student(202, 'Osman')

const course1 = new Course(101, 'Math', 'Math course')

admin.addCourse(course1, courses)
student1.enroll(course1)
student2.enroll(course1)

admin.getStudentList(course1)

const findingCourse = admin.getCourse(101, courses)

if (findingCourse) {
    console.log(`Course found: ${findingCourse.title} - ${findingCourse.description}`)
} else {
    console.log('Course not found!')
}


const noCourse = admin.getCourse(999, courses)
console.log(`Course not found: ${noCourse}`)