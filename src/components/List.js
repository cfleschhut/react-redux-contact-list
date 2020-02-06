import React from 'react';
import ListItem from './ListItem';

const List = ({ contacts }) => (
  <ul>
    {(contacts || []).map(contact => (
      <ListItem key={contact.id} contact={contact} />
    ))}
  </ul>
);

export default List;
