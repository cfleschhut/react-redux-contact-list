import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const List = ({ contacts }) => (
  <StyledList>
    {(contacts || []).map(contact => (
      <ListItem key={contact.id} contact={contact} />
    ))}
  </StyledList>
);

export default List;
