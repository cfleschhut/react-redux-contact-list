import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Button from './Button';

const StyledForm = styled.form`
  fieldset {
    margin: 0;
    padding: 20px;
    border: none;
    border-top: 1px solid hsl(0, 0%, 85%);

    legend {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 500;
    }

    > div {
      margin-bottom: 1.25em;
    }

    label {
      display: inline-block;
      margin-bottom: 5px;
      font-size: 14px;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 3px;
  font-size: 100%;
`;

const AddContactForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add contact</legend>

        <div>
          <label htmlFor="first_name">First Name:</label>
          <StyledInput
            as={Field}
            name="first_name"
            component="input"
            type="text"
            id="first_name"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <StyledInput
            as={Field}
            name="last_name"
            component="input"
            type="text"
            id="last_name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <StyledInput
            as={Field}
            name="email"
            component="input"
            type="email"
            id="email"
          />
        </div>
        <Button type="submit" disabled={pristine || submitting}>
          Add
        </Button>
      </fieldset>
    </StyledForm>
  );
};

export default reduxForm({ form: 'addContact' })(AddContactForm);
