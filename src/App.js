import { Component } from "react";
import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
// import { nanoid } from "nanoid";
import styled from "styled-components";

const Title = styled.h2`
margin-bottom: 20px;
margin-top: 0;
`

const Div = styled.div`
margin: 0 auto;
width: 650px;
background-color: #fff1ec;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`

export class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  //   name: "",
  //   number: "",
  // };

  // inputData = (name, number) => {
  //   const nameUpper = name.toUpperCase();
  //   const numberUpper = number;

  //   const nameExist = this.state.contacts.some((contact) => {
  //     return contact.name.toUpperCase() === nameUpper;
  //   });

  //   const numberExist = this.state.contacts.some((contact) => {
  //     return contact.number === numberUpper;
  //   });

  //   if (nameExist) {
  //     alert(`${name} is already in contacts!`);
  //     return;
  //   }

  //   if (numberExist) {
  //     alert(`${numberUpper} is already exist!`);
  //     return;
  //   }

  //   const objectValue = {
  //     name: name,
  //     number: number,
  //     id: nanoid(),
  //   };

  //   this.setState(
  //     (prevState) => ({
  //       contacts: [...prevState.contacts, objectValue],
  //     }),
  //     () => {
  //       console.log(this.state);
  //     }
  //   );
  //   // console.log(this.state);
  // };

  // deleteData = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id)
  //   }));
  // };

  // filterData = (value) => {
  //   this.setState({
  //     filter: value,
  //   });
  // };

  render() {
    return (
      <Div className="App">
        <Title>Phonebook | <span style={{backgroundColor:'pink', borderRadius: '10px'}}>Зроблено з любов'ю!</span></Title>
        <Form/>
        <Filter/>
        <Contacts/>
      </Div>
    );
  }
}

export default App;
