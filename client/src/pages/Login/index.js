import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import '../../components/css/login.css';
import loginPic from '../../components/assets/login.jpg';

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
          <Link to='/'>back to the homepage.</Link>
        </p>
      )
    }
    return (
      <form onSubmit={handleFormSubmit}>
        <div id='login-stack'>
          <input
            placeholder='Your email'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleChange}
          />
          <input
            placeholder='******'
            name='password'
            type='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button id='login-btn' type='submit'>
            Submit
          </button>
          <p>Dont have an account yet?</p>
          <Link id='signup' to='/signup'>
            Sign Up
          </Link>
        </div>
      </form>
    );
  };

  return (
    <main>
      <div id='login-all'>
        <div id='login-contents'>
          <div id='left-login'>
            {renderForm()}
          </div>
          <div id='right-login'>
            <img src={loginPic} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
