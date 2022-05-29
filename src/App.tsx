import React from "react";
import "./App.css";

let student: string = "Rokib";
let age: number = 20;
let isSmart: boolean = true;

let students: string[] = ["Rahim", "Karim", "Jashim"];
let fees: number[] = [12, 17, 20, 21];

interface Person {
  name: string;
  Job: string;
  age?: number; // optional property
}

const person: Person = {
  name: "Rokib",
  Job: "Development",
};
console.log(person);
function App() {
  return <div className="App"></div>;
}

export default App;
