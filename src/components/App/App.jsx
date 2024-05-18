import './App.css';
import { ContactForm, ContactList, SearchBox } from '../index';
import contacts from '../../datas/contacts.json';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
