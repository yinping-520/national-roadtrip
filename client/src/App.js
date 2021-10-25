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
            <Route exact path='/arches/:parkId'>
              <Arches />
            </Route>
            <Route exact path='/bryce/:parkId'>
              <Bryce />
            </Route>
            <Route exact path='/glacier'>
              <Glacier />
            </Route>
            <Route exact path='/grandcanyon'>
              <GrandCanyon />
            </Route>
            <Route exact path='/olympic'>
              <Olympic />
            </Route>
            <Route exact path='/rockymtn'>
              <RockyMtn />
            </Route>
            <Route exact path='/sequoia'>
              <Sequoia />
            </Route>
            <Route exact path='/smokey'>
              <Smokey />
            </Route>
            <Route exact path='/teton'>
              <Teton />
            </Route>
            <Route exact path='/yellowstone'>
              <Yellowstone />
            </Route>
            <Route exact path='/yosemite'>
              <Yosemite />
            </Route>
            <Route exact path='/zion'>
              <Zion />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
