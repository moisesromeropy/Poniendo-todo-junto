import {Component} from "react"; 

const PersonCard = (props) => {
        return(
            <> 
            <h1>{props.lastName} {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={props.modificarEdad}>Birthday Button For {props.lastName} {props.firstName} </button>
            </>
        )
}

export default PersonCard;