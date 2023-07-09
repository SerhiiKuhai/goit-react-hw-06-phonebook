import React from 'react';
import { Todo } from 'components/Todo/Todo';
import { Grid } from 'components/Grid/Grid.styled';

import { useSelector } from 'react-redux';

export function ContactList() {
  const contactPhone = useSelector(state => state.contacts);

  return (
    <Grid>
      {contactPhone.map(contact => (
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
