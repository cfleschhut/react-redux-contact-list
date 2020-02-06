import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import List from '../components/List';

const Wrapper = styled.div`
  padding: 20px;
`;

const App = ({ contacts }) => {
  return (
    <Wrapper>
      <List contacts={contacts}></List>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);
