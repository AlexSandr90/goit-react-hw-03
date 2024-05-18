import classes from './Contact.module.css';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
  console.log({ name, number });
  return (
    <>
      <div>
        <div>
          <BsFillPersonFill />
          <span>{name}</span>
        </div>
        <div>
          <BsTelephoneFill />
          <span>{number}</span>
        </div>
      </div>

      <button>Delete</button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
