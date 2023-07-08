// import React, { useState } from 'react';
import React, { useRef } from 'react';
import { Button } from 'components/Button/Button.styled';
import { FormContact } from 'components/Form/Form.styled';
import { InputContact } from 'components/Form/Input.styled';
import { LabelContact } from 'components/Form/Label.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContactPhone } from 'redux/phonebook/selectors';

import { nanoid } from 'nanoid';
import { addContact } from 'redux/phonebook/actions';

export function ContactForm() {
  const contactPhone = useSelector(getContactPhone);
  console.log(contactPhone);
  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contactName = contactNameRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const contactId = nanoid();
    console.log({ contactId, contactName, contactNumber });
    dispatch(
      addContact({ id: contactId, name: contactName, number: contactNumber })
    );
  };

  return (
    <>
      <FormContact onSubmit={handleSubmit}>
        <LabelContact htmlFor="inputName">Name</LabelContact>
        <InputContact
          ref={contactNameRef}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="inputName"
          // value={name}
          // onChange={handleChange}
        />
        <LabelContact htmlFor="inputNumber">Number</LabelContact>
        <InputContact
          ref={contactNumberRef}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="inputNumber"
          // value={number}
          // onChange={handleChange}
        />
        <Button type="submit">Add contact</Button>
      </FormContact>
    </>
  );
}
