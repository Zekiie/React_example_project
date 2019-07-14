import React, { useState } from 'react'; //useState allows us manage state in functional components
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person"


const App = props => {
    //call like a function and set initial state
    //return always array with two elements
    const [personsState, setPersonsState] = useState({
            person: [
                {name: "Max", age: 29},
                {name: "Nany", age: 34},
                {name: "Chloe", age: 24},
            ], // first eleement our current state

            //the second element will always be a function that allows to us update
            // this state and rerender this component
        }
    );
    const [otherState, setOtherState] = useState('some other value');
    console.log(personsState, otherState)
    const switchNameHandler = () => {
        // this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            person: [
                {name: "Maximilian", age: 29},
                {name: "Nany", age: 34},
                {name: "Chloe", age: 27},
            ],
        });
    };

    return (
        <div className="App">
            <h1>Hi I am react app</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.person[0].name}
                age={personsState.person[0].age}
            />
            <Person
                name={personsState.person[1].name}
                age={personsState.person[1].age}
            />
            <Person
                name={personsState.person[2].name}
                age={personsState.person[2].age}
            >
                My Hobbies: Reading!
            </Person>
        </div>
    );
}

export default App;




