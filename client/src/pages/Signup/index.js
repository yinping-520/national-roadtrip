import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../components/css/login.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import loginPic from '../../components/assets/login.jpg';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        window.location.replace('/destinations')
      )
    } 
    return (
      <form onSubmit={handleFormSubmit}>
        <div id='login-stack'>
        <input
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
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
        <button type="submit" id='login-btn'>
          Submit
        </button>
        <p>Already have an account?</p>
          <Link id='signup' to='/login'>
            Login
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
            <img src={loginPic} alt='lake'/>
          </div>
        </div>
      </div>
      </main>
  );
};

export default Signup;
