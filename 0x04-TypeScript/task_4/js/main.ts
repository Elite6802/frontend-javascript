import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';


// The merged Teacher interface with all optional experience properties
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }
}

// Create and export a constant for the Cpp subject
export const cpp = new Cpp();

// Create and export a constant for the Java subject
export const java = new Java();

// Create and export a constant for the React subject
export const react = new React();

// Create and export a Teacher object with C++ experience
export const cTeacher: Teacher = {
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