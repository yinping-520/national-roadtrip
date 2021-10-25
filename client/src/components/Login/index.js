import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import '../css/login.css';

import Auth from '../../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log('Data', data);

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    } 
    return (
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <main>
      <div id="pp">
      <p>if not logged in when planning a trip, force relocate here for authentifcation.</p>
      <p>when logged in, "login" tab will say logout instead</p>
      <p>when logged in, "your trips" tab is created beside "shop"</p>
      <p>"your trips" will display itenerary</p>
      <p>"your trips" dissapears from nav if logged out</p>
      </div>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
      
    </main>
  );
};

export default Login;
