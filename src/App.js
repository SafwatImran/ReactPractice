import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'asda',name: 'Max', age: 28 },
      { id:'wew', name: 'Manu', age: 29 },
      { id:'rer', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]= person;
    this.setState( 
      {persons: persons}
    );
    }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice(); <-this can be used as well 
    const persons = [...this.state.persons]
    //splice removes the person from the state based on index, second number refers to how many to remove
    // not best practice though
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            click={()=> this.deletePersonHandler(index)}
            name={person.name} age={person.age} 
            key={person.id} 
            changed = {(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;