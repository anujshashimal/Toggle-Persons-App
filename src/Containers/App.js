import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'


class App extends React.Component {

    state = ({
        persons: [
            {name: "anuj", age: 21},
            {name: "Shashimal", age: 22},
            {name: "Jayasekara", age: 23},
            {name: "Jayasekara", age: 23}

        ],
        otherState: 'some other',
        showPersons: false
    });

    switchNamesHandler = () => {
        this.setState({
            persons: [
                {name: "anuj123", age: 21},
                {name: "Shashimal", age: 22},
                {name: "Jayasekara", age: 23}
            ]
        })
    }

    namedHandler = (event) => {
        this.setState({
            persons: [
                {name: "anuj123", age: 21},
                {name: event.target.value, age: 22},
                {name: "Jayasekara", age: 23}
            ]
        })

    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow
        })
    }

    deletePersonsHandler = (personIndex) => {
        const persons =  this.state.persons
        persons.splice(personIndex, 1)
        this.setState({
            persons: persons

        })

    }

    render() {
    let person = null;
    if(this.state.showPersons === true){
        person = (
            <div >
                {
                    this.state.persons.map((person, index) => {
                        return <Person
                            name = {person.name}
                            age = {person.age}
                            click = {() => this.deletePersonsHandler(index)}
                        />
                    })
                }
            </div>
        );
    }

    return (
        <div className="App">
            <h1> Hi, I'm React App</h1>
            <button onClick={this.togglePersonsHandler}> Switch Name</button>
            {person}
        </div>
        );
}
}
export default App;

