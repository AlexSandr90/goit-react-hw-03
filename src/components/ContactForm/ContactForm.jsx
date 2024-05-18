import { Field, Form, Formik } from 'formik';
import classes from './ContactForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { useId } from 'react';

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameId = useId();
  return (
    <Formik initialValues={initialValue} onSubmit={() => {}}>
      <Form className={classes.contactForm}>
        <div className={classes.contactForm_Item}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
        </div>
        <CustomButton buttonText={'Add Contact'} />
      </Form>
    </Formik>
  );
};

export default ContactForm;
