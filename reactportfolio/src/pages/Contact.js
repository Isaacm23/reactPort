import React from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container'
import emailjs from 'emailjs-com'
// import Axios from 'axios';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_ymn2akc', e.target, 'user_zS8cSmXrsb7RkIckthSYg')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset()
    }

class ContactPage extends React.Component {

   


    render() {
        return(
            <div>
                <Hero title={this.props.title} />
                <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>

                
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text"  />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3"  />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" name='send message'>
                            Send
                        </Button>


                        
                    </Form>
                    </Col>
            </Row>
        </Container>
    


            </div>
            
        );
    }

}



export default ContactPage;