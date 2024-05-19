import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';
import contactsList from '../../datas/contacts.json';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(contactsList);
  const [filterValue, setFilterValue] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const searchContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deletedContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(({ id }) => id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filterValue} onFilter={setFilterValue} />
      <ContactList contacts={searchContacts} deletedContact={deletedContact} />
    </>
  );
};

export default App;
