import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard/PersonCard';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      personCard:[{
        firstName: "Jane",
        lastName: "Doe",
        age: 45,
        hairColor: "Black"
      },
      {
        firstName: "John",
        lastName: "Smith",
        age: 88,
        hairColor: "Brown"
      }
      ]
    }
  }
  modificarEdad = (indice) =>{
    const newState = [...this.state.personCard];
    newState[indice].age += 1;
    this.setState({personCard: newState});
  }
  render = () =>{
    const primerObjeto = this.state[0];
    console.log(primerObjeto);
    return (
      <div>
        {this.state.personCard.map((person, index) => {
            return(<PersonCard key={index}
                             firstName={person.firstName}
                             lastName={person.lastName}
                             age={person.age}
                             hairColor={person.hairColor}
                             modificarEdad={() => this.modificarEdad(index)}
                             />)
          })}
        
        
        {/* <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/> */}
      </div>
    )
  }

}

// function App() {
  // return (
    // <div className="App">
      // <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      // <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      // <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      // <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    {/* </div> */}
  // );
// }

export default App;
