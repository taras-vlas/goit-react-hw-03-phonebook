import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from "uuid";
import './styles.css';

class App extends Component {
	state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    filter: "",
    //showModal: false,
  };


  /***  Події з контактами телефонної книги в localStorage */
  
  componentDidMount() {
    //Фаза монтування після рендеринга компонента,  Забирання з localStorage
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);  // для преобразования JSON обратно в объект.
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    console.log("componentDidMount()");
  }

  
  componentDidUpdate(prevProps, prevState) {
    // Визов фази з моменту оновлення компонента 
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    
    // Порівняння стейтів
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts)); //для преобразования значений, объектов, массивов в строку формата JSON 
    }
    console.log("componentDidUpdate()");
  }


  componentWillUnmount() {
    //Визов перед видаленням компонента з DOM
    console.log("componentWillUnmount()");
  }


  addContact = (contacts) => {
    const inputName = this.state.contacts
      .map((contact) => contact.name)
      .includes(contacts.name);    //значення true чи false
    
    if (inputName) {      // якщо є дублікат
      alert(`${contacts.name} is already in contacts`);
      } else {
      const contact = {
        ...contacts,
        id: uuidv4(),     // даємо id
      };
      
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
        //contacts: [...prevContacts, contact],
      }));
    }
  };

   
    // Подію на полі фільтра пишемо в стейт
  // changeFilter = (event) => {                              
  //   this.setState({ filter: event.target.value });  //або
  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

    
    // Фільтрує та повертає результат фільтра
  getinputContacts = () => {
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };   


  render() {
    const { filter } = this.state;

    const inputContacts = this.getinputContacts(); //(5) [{…}, {…}, {…}, {…}, {…}]
      console.log('inputContacts', inputContacts, 'inputContacts.length',inputContacts.length) 
    
    return (
        <div>
          <h1>Phonebook</h1>

          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
        
          {/* {inputContacts.length > 0 && (    ***знято!!! если искать по сочетанию букв по которому нет совпадений - пропадает инпут.  */} 
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          {/* )}           */}
            <ContactList
              contacts={inputContacts}
              onDeleteContact={this.deleteContact}
            />
          
        </div>
    );
  };
}

export default App;