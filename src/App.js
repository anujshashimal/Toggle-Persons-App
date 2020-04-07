import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'


class App extends React.Component {

    state = ({
        persons: [
            {name: "anuj", age: 21},
            {name: "Shashimal", age: 22},
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

    render() {

    return (
        <div className="App">
            <h1> Hi, I'm React App</h1>
            <button onClick={this.togglePersonsHandler}> Switch Name</button>
            {
                this.state.showPersons === true ?
            <div >
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
            />
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click = {this.namedHandler}
            />
            <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
            />
            </div> : null
            }
        </div>
        );
}
}
export default App;

