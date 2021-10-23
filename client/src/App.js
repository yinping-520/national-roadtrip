import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './css/scroll.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Destinations from './components/Destinations';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import Journey from './components/Journey';
import Shop from './components/Shop';
import Trips from './components/Trips';
import Arches from './components/ParkArches';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <div id="progressbar"></div>
          <Header />
          <div>
            <Route exact path="/">
              <Mainpage />
            </Route>
            <Route exact path="/destinations">
              <Destinations />
            </Route>
            <Route exact path="/journey">
              <Journey />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/trips">
              <Trips />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            {/* <Route exact path="/users/:id">
              <Profile />
            </Route> */}
            <Route exact path="/arches">
              <Arches />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
