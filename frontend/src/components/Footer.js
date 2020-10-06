import React, { useState, useRef } from 'react';
import TextField from './TextField';
import TextArea from './textArea';
import Button from './Button/Button';
import './footer.css';
import axios from 'axios';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const onEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onMessageChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const submitEmail = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: formData,
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  };

  const nameRef = useRef('null');
  let emailRef = React.createRef();
  let messageRef = React.createRef();

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <footer className='footer'>
      <h3 className='contact-form-title'>Contact Me:</h3>
      <form className='contact-form' onSubmit={submitEmail} method='POST'>
        <TextField
          required
          textFieldSize='textField--medium'
          textFieldStyle='textField--outline'
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={onNameChange}
          ref={nameRef}
        />
        <TextField
          required
          textFieldSize='textField--medium'
          textFieldStyle='textField--outline'
          type='email'
          placeholder='Email'
          name='name'
          value={formData.email}
          onChange={onEmailChange}
          ref={emailRef}
        />
        <TextArea
          required
          textFieldSize='textField--area--medium'
          textFieldStyle='textField--outline'
          type='textarea'
          placeholder='Message'
          name='name'
          value={formData.message}
          onChange={onMessageChange}
          ref={messageRef}
          rows={5}
          cols={26}
        />

        <Button type='submit' buttonStyle='btn--success--solid'>
          Submit
        </Button>
      </form>
    </footer>
  );
};

export default Footer;
