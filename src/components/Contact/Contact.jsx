import classes from './Contact.module.css';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={classes.contactInfo}>
        <div>
          <BsFillPersonFill />
          <span>{name}</span>
        </div>
        <div>
          <BsTelephoneFill />
          <span>{number}</span>
        </div>
      </div>

      <button className={classes.deletedBtn}>Delete</button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
