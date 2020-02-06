import React from 'react';

const ListItem = ({ contact }) => {
  const { first_name, last_name } = contact;

  return <li>{`${first_name} ${last_name}`}</li>;
};

export default ListItem;
