import React from "react";
import "./App.css";

// declare type with variable
let student: string = "Rokib";
let age: number = 20;
let isSmart: boolean = true;
console.log(student, age, isSmart);

// declare array of string
let students: string[] = ["Rahim", "Karim", "Jashim"];
console.log(students);

// declare array of numbers
let fees: number[] = [12, 17, 20, 21];
console.log(fees);

// declare interface how object will look like
interface Person {
  name: string;
  Job: string;
  age?: number; // optional property
}

// using interface with object type
const person: Person = {
  name: "Rokib",
  Job: "Development",
};
console.log(person);

// object type declare
const person2: { name: string; job: string; age: number } = {
  name: "ali",
  job: "Programmer",
  age: 21,
};
console.log(person2);

function App() {
  return <div className="App"></div>;
}

export default App;
