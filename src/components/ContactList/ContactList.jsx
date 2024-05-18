import Contact from '../Contact/Contact';
import classes from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul className={classes.contactList}>
      {contacts.map(({ id, ...otherProps }) => {
        return (
          <li className={classes.contact} key={id}>
            <Contact {...otherProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
