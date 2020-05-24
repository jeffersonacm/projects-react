import React from 'react';

import './Contact.scss'
import { format } from 'date-fns';

class Contact extends React.Component {
  render() {
    const contact = this.props.value;
    let admissionDate = null

    if (contact) {
      admissionDate = new Date(contact.admissionDate);
    }

    return (
      <article className="contact" data-testid="contact">
        <img className="contact__avatar" data-testid="contact-avatar" src={contact && contact.avatar} alt={contact && contact.name}/>
        <span className="contact__data" data-testid="contact-name">{contact && contact.name}</span>
        <span className="contact__data" data-testid="contact-phone">{contact && contact.phone}</span>
        <span className="contact__data" data-testid="contact-country">{contact && contact.country}</span>
        <span className="contact__data" data-testid="contact-date">{contact && format(admissionDate, "dd/MM/yyyy") }</span>
        <span className="contact__data" data-testid="contact-company">{contact && contact.company}</span>
        <span className="contact__data" data-testid="contact-department">{contact && contact.department}</span>
      </article>
    );
  }
}

export default Contact;


