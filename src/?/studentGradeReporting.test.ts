import studentGradeReporting from "./studentGradeReporting";
import allGradesArray from './grades.json';

type studentName = string;
type moduleTitle = string;
type grade = number;

interface studentResult {
    student: [studentName, moduleTitle, grade]
}

test("Says student grades", () => {

    studentGradeReporting(allGradesArray as studentResult[]);

})