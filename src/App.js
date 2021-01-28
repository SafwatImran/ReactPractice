import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons : [
      { name : 'Safwat', age : 25},
      { name : 'Kaisa', age : 23},
      { name : 'Fish', age :2 }
    ], 
    otherState : 'some value'
  });
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons :[
      { name : 'Safwat Imran', age : 25},
      { name : newName, age : 23},
      { name : 'Fisher', age :26 }
    ], 
    otherState : personState.otherState 
  })
};  
  const nameChangedHandler = (event) =>{
    setPersonsState({
      persons :[
      { name : 'Safwat Imran', age : 25},
      { name : event.target.value, age : 23},
      { name : 'Fisher', age :26 }
    ]
  })
}

  return (
     <div className="App">
      <h1>hi, I'm your first React App</h1>
      <button onClick={switchNameHandler.bind(this,"Kaiser Soze")}>Switch Name</button>
      <Person name=
      {personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name=
      {personState.persons[1].name} age={personState.persons[1].age} click ={switchNameHandler.bind(this, "JackTheRipper")} changed = {nameChangedHandler}>My Hobbies: Guitar </Person>
      <Person name =
      {personState.persons[2].name} age= {personState.persons[2].age}/>
    </div>
  );
}

export default app;

