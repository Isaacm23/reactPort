import React from 'react';

import './App.css';

class App extends React.Component {
 
  constructor(props){
    this.state = {
      title: 'Isaac Mckittrick',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title:'About Me',
        subTitle: 'I am very Interesting',
        text: 'Read a Little about me below'
      },
      portfolio: {
        title:'My Projects',
        subTitle: 'Some of my work',
        text: 'There is plenty more to come'
    },
    contact: {
      title:'contact',
      subTitle: 'Please leave contact information if interested',
      text: 'I hope to hear from you'
  },
 
  render(){
  return (
    <div> Hello world </div>
  );
}
}

export default App;
