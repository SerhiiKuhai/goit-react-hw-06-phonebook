import React from 'react';
import { Todo } from 'components/Todo/Todo';
import { Grid } from 'components/Grid/Grid.styled';

import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filtersContactPhone = useSelector(state => state.filtersContact);
  
  const filters = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtersContactPhone)
  );
  console.log('2filters', filters);
  return (
    <Grid>
      {filters.map(contact => (
        <Todo
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </Grid>
  );
}
