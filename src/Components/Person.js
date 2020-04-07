import React from 'react';
import './Person.css'
const Person = (props) => {
    return (
        <div className="Person">
                <p> I'm {props.name} and {props.age} years old</p>
                <p>  My hobby is {props.children}</p>
                <input type="text" onChange = {props.click}/>
        </div>
    )

}
export default Person;