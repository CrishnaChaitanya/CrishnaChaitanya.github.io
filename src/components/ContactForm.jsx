import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();
      //email validation
  const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@")
    if(atSymbol < 1)return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol +2) return false;
    if (dot === emailVal.length -1 ) return false;
    return true;
 }
 if(isEmail(email))
 {

    emailjs.sendForm('service_3cjnla7', 'template_a4jdmr8', e.target, 'user_94h3F61lleMFwhcWiO6or')
      .then((result) => {
          console.log(result.text);
          alert("Thank you!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
else{
  alert("Enter correct email please")
}

}


  return (
    <>
      <FormStyle onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="subject">
            Subject
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group" >
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
     
      </FormStyle>

    </>
  );
}