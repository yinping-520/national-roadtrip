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
import Login from './pages/Login';
import Destinations from './pages/Destinations';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import Journey from './components/Journey';
import Shop from './pages/Shop';
import Trips from './components/Trips';
import Park from './pages/Park';
import Bryce from './components/ParkBryce';
import Glacier from './components/ParkGlacier';
import GrandCanyon from './components/ParkGrandCanyon';
import Olympic from './components/ParkOlympic';
import RockyMtn from './components/ParkRockyMtn';
import Sequoia from './components/ParkSequoia';
import Smokey from './components/ParkSmokeyMtn';
import Teton from './components/ParkTeton';
import Yellowstone from './components/ParkYellowstone';
import Yosemite from './components/ParkYosemite';
import Zion from './components/ParkZion';
import ScrollToTop from './components/ScrollToTop';
import up from './components/assets/up-arrow.jpg';
import './components/css/mainpage.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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

// const styles = {
//   showBtn: {
//       opacity: 0.5
//   }
// }

// const scrollToTopBtn = document.getElementById('up-arrow');
// const rootElement = document.documentElement;
// function handleScroll() {
//   const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

//   if ((rootElement.scrollTop / scrollTotal ) > 0.40 ) {
//     scrollToTopBtn.className.add('showBtn');
//   } else {
//     // scrollToTopBtn.className.remove('showBtn')
//     scrollToTopBtn.classList.remove(styles={style.showBtn});
//   }
// };
// document.addEventListener('scroll', handleScroll);

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <div>
        <div id='progressbar'></div>
        <a href='#top'><img id='up-arrow' src={up} /></a>
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
            {/* <Route exact path='/users/:id'>
              <Profile />
            </Route> */}
            <Route exact path='/parks/:parkId'>
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
