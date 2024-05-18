import classes from './Contact.module.css';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';

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
      <CustomButton buttonText={'Delete'} />
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
