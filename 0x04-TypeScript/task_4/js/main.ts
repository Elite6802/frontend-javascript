/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// The merged Teacher interface with all optional experience properties
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }
}

// Create and export a constant for the Cpp subject
export const cpp = new Subjects.Cpp();

// Create and export a constant for the Java subject
export const java = new Subjects.Java();

// Create and export a constant for the React subject
export const react = new Subjects.React();

// Create and export a Teacher object with C++ experience
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// --- C++ Subject ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// --- Java Subject ---
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React Subject ---
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());