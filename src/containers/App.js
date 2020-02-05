import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import './App.css';

const App = ({ contacts }) => {
  return (
    <div>
      <List contacts={contacts}></List>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(App);
