import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import classes from './App.css';
import Person from "./Person/Person"


class App extends Component {

    state = {
        person: [
            {name: "Max", age: 29},
            {name: "Nany", age: 34},
            {name: "Chloe", age: 24},
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    switchNameHandler = (newName, age) => {
        // this.state.persons[0].name = 'Maximilian';
        this.setState({
            person: [
                {name: newName, age: 29},
                {name: "Nany", age: 34},
                {name: "Chloe", age: 23},
            ],

        })
    };

    nameChangeHandler = (e) => {
        this.setState({
            person: [
                {name: "Max", age: 29},
                {name: e.target.value, age: 34},
                {name: "Chloe", age: 23},
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        return (
            <div className={classes.App}>
                <h1>Hi I am react app</h1>
                <button
                    style = {style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>

                { this.state.showPersons ?
                    <div>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}/>
                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                    changed={this.nameChangeHandler}
                />
                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                    click={this.switchNameHandler.bind(this, "Max", 22)}
                >
                    My Hobbies: Reading!</Person>
                </div> : null
                }
            </div>
        );
    }

}

export default App;