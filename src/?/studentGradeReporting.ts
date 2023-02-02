import { stringify } from 'querystring';
import allGradesArray from './grades.json';
import * as readline from 'node:readline'; //fix later

type studentName = string;
type moduleTitle = string;
type grade = number;

interface studentResult {
    student: [studentName, moduleTitle, grade]
}

// ["storm", "swahili", 100],
// ["groot", "i am groot", 100],

interface gradeDictionary {
    [key:studentName]: [moduleTitle, grade][]
}

export default function studentGradeReporting(allGradesArray:studentResult[]):void{
    
    const allGradesDict:gradeDictionary = compileGradesDictionary(allGradesArray);

    console.table(allGradesDict);

    // const studentNames:studentName[] = allGradesDict.keys;

    // studentNames.forEach( (name => console.log(name+'\n')))

}

function compileGradesDictionary(grades:studentResult[]):gradeDictionary{
    let resultObj:gradeDictionary = {
    }

    grades.forEach( (current:studentResult) => {
        if (!resultObj[current.student[0]]){
            const currentSubject:string=current.student[1];
            const currentGrade:number=current.student[2];
            resultObj[current.student[0]]=[[currentSubject, currentGrade]];
        }
        if(resultObj[current.student[0]]){
        }
    })
    return resultObj;
}



/*
allGradesArray = read all data from json file

allGradesDict = compileGrades(allGradesArray)

forever

    show list of all student names in allGradesDict

		prompt user for input

    chosenStudentName = get student name from user input (async! So, await it.)

    printOneStudentReport(chosenStudentName, allGradesDict)
*/