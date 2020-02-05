import React from 'react';
import ListItem from './ListItem';

const List = ({ contacts }) => (
  <ul>
    {(contacts || []).map((contact, index) => {
      return <ListItem key={index} name={contact.name} />;
    })}
  </ul>
);

export default List;
