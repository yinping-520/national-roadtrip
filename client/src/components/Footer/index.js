import React from 'react';
import '../css/footer.css';

const Footer = () => {
  const jokes = [
    {question:"What did the dad say after dropping his son off at Yellowstone National Park",
     answer: "Bison..."},
     {question:"Yosemite became a national park...",
     answer: "so people wouldn't take it for granite!"},
     {question:"I'm a tour guide, my job isn't tough...",
     answer: "it's a walk in the park!"},
     {question:"What do bears call people in sleeping bags?",
     answer: "Bearritos..."}
  ]
    
  const random = Math.floor(Math.random()* jokes.length)


  return (
    <footer>
      <p id='foot-left'>{jokes[random].question}</p>
      <p id='foot-right'>Reveal Answer: <span>{jokes[random].answer} </span></p>
    </footer>
  );
};

export default Footer;
