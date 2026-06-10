const calculateTotalMarks = (s1, s2, s3, s4, s5) => {
    const subjects = [s1, s2, s3, s4, s5]
    const totalMarks = s1 + s2 + s3 + s4 + s5
    const avgMarks = totalMarks / subjects.length

    const passedSubjects = s1 >= 40 && s2 >= 40 && s3 >= 40 && s4 >= 40 && s5 >= 40

    const resultSubjects = passedSubjects ? 'Passed' : 'Failed'

    console.log('==== Student Results ====')
    console.log(`Total Marks: ${totalMarks}`)
    console.log(`Average Total Marks: ${avgMarks}`)
    console.log(`Final Results: ${resultSubjects}`)
}

calculateTotalMarks(60, 42, 50, 40, 42)
