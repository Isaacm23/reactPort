import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import { Container, NavbarBrand } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar'
import Footer from './components/Footer';
// import PortfolioPage from './pages/PortfolioPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

class App extends React.Component {
 
  constructor(props){
    super(props);
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
  }
}
  }
 
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Isaac Mckittrick</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <Route path="/" exact render={() => <AboutPage title={this.state.home.title} subTitle={this.state.about.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;