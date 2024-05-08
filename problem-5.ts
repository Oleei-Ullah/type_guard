interface Student {
    name: string;
    age: number;
    grades: number[];
}

const calculateAverageGrade = (student: Student): number => {
    const grades = student?.grades
    const averageGrade = grades.reduce((x, y) => x + y, 0) / grades.length;

    return averageGrade;
};

