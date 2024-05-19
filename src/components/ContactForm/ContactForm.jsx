import { Field, Form, Formik } from 'formik';
import classes from './ContactForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { useId } from 'react';
import PropTypes from 'prop-types';

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (name.length > 0 && number.length > 0) {
      addContact({ id: Date.now(), ...values });
      resetForm();
    }
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={classes.contactForm}>
        <div className={classes.contactForm_Item}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
        </div>
        <div className={classes.contactForm_Item}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
        </div>
        <CustomButton type="submit" buttonText={'Add Contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
