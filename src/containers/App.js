import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { favoriteContact, deleteContact } from '../actions/contacts';
import AddContactForm from '../components/AddContactForm';
import List from '../components/List';

const Wrapper = styled.div`
  padding: 20px;
`;

const App = ({ contacts, favoriteContact, deleteContact }) => {
  return (
    <Wrapper>
      <AddContactForm onSubmit={values => console.log(values)} />

      <List
        contacts={contacts}
        favoriteContact={favoriteContact}
        deleteContact={deleteContact}
      ></List>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  favoriteContact,
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
