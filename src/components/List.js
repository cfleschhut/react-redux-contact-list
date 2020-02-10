import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
  justify-items: center;
  margin: 0 0 2em;
  padding: 0;
  list-style: none;
`;

const List = ({ contacts, favoriteContact, deleteContact }) => (
  <StyledList>
    {(contacts || []).map(contact => (
      <ListItem
        key={contact.id}
        contact={contact}
        favoriteContact={favoriteContact}
        deleteContact={deleteContact}
      />
    ))}
  </StyledList>
);

export default List;
