import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { favoriteContact } from '../actions/contacts';
import List from '../components/List';

const Wrapper = styled.div`
  padding: 20px;
`;

const App = ({ contacts, favoriteContact }) => {
  return (
    <Wrapper>
      <List contacts={contacts} favoriteContact={favoriteContact}></List>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  favoriteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
