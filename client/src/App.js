import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './css/scroll.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Destinations from './pages/Destinations';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import Journey from './components/Journey';
import Shop from './pages/Shop';
import Trips from './pages/Trips';
import Park from './pages/Park';
import ScrollToTop from './components/ScrollToTop';
import up from './components/assets/up-arrow.jpg';
import './components/css/mainpage.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [scrollActive, setScrollActive] = useState(false);
  const [progessHeight, setProgressHeight] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const pos = window.scrollY;
      const dh = document.body.scrollHeight;
      const wh = window.innerHeight;
      const scrollPercent = (pos / (dh - wh)) * 100;
      setProgressHeight(scrollPercent);
      setScrollActive(this.window.scrollY > 350);
    });
  }, [])

  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <div>
          <div id='progressbar' style={{height:`${progessHeight}%`}}></div>
          <a href='#top'><img id='up-arrow' className={scrollActive && 'active'} src={up} /></a>
          <Header />
          <div>
            <Route exact path='/'>
              <Mainpage />
            </Route>
            <Route exact path='/destinations'>
              <Destinations />
            </Route>
            <Route exact path='/journey'>
              <Journey />
            </Route>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/trips'>
              <Trips />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/:parkId'>
              <Park />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
