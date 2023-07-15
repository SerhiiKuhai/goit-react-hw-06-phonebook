// import React, { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/App.styled';
// import { nanoid } from 'nanoid';

// import { useSelector } from 'react-redux';
// import { getContactPhone } from '../redux/phonebook/selectors';

// const keyContacts = 'contacts';

export function App() {
  // const contactPhone = useSelector(getContactPhone);
  // console.log(contactPhone);

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(keyContacts)) ?? []
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(keyContacts, JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteTodo = todoId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== todoId)
  //   );
  // };

  // const formSubmitHandler = (name, number) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const contact = { name, number, id: nanoid() };
  //   setContacts(prevContacts => [contact, ...prevContacts]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getFiltredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
