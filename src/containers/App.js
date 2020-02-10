import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  addContact,
  deleteContact,
  favoriteContact
} from '../actions/contacts';
import AddContactForm from '../components/AddContactForm';
import List from '../components/List';

const Wrapper = styled.div`
  padding: 20px;
`;

const App = ({ contacts, addContact, deleteContact, favoriteContact }) => {
  return (
    <Wrapper>
      <List
        contacts={contacts}
        favoriteContact={favoriteContact}
        deleteContact={deleteContact}
      ></List>

      <AddContactForm onSubmit={values => addContact(values)} />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  addContact,
  deleteContact,
  favoriteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
