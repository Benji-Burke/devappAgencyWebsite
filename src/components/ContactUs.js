import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '40px'
}

class ContactUs extends React.Component {


  render() {
    return (
      <form style={formStyles} name = "contact" action="/contact" method="post">
        <input type="hidden" name="form-name" value="contact"/>
        <input required type="text" name="name" placeholder="Your name"/>
        <input requried type="email" name="email" placeholder="Your email" />
        <textarea required name="messsage" cols="60"rows="10" placeholder="Your message"></textarea>
        <button type="submit">Send a message</button>
      </form>
    )
  }
}

export default ContactUs;