import {Component} from "react"; 

class PersonCard extends Component{
    render = () =>{
        return(
            <> 
            <h1>{this.props.lastName} {this.props.firstName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.props.modificarEdad}>Birthday Button For {this.props.lastName} {this.props.firstName} </button>
    
        </>

        )
    }
}

export default PersonCard;