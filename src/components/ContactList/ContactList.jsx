import React from 'react';
import { Todo } from 'components/Todo/Todo';
import { Grid } from 'components/Grid/Grid.styled';

import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filterContact = useSelector(state => state.filtersContact);

  const normalizedFilter = filterContact.toLowerCase();
  const filters = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

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
