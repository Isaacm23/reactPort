import React from 'react';

import Card from '../components/Card';
import resume from '../images/resume.jpg'
import burger from '../images/burger.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import business from '../images/business.jpg'
import chargen from '../images/chargen.jpg'
import food from '../images/food.jpg'
import github from '../images/github.png'
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Resume',
                    subTitle: 'My Professional Resume',
                    imgSrc: resume,
                    link: 'https://drive.google.com/file/d/1oV9UcK0TYTD84CrGC34r2jJsAy6XWYIj/view?usp=sharing',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Linkedin',
                    subTitle: 'Get To Known Me Better',
                    imgSrc: business,
                    link:'https://www.linkedin.com/feed/' ,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Burger App',
                    subTitle: 'Project Made Using Handlebars',
                    imgSrc: burger,
                    link: 'https://burgers-handlebars.herokuapp.com/' ,
                    selected: false
                },
                {
                    id: 3,
                    title: 'Character Generator',
                    subTitle: 'Generate Your Own Fantasy Character',
                    imgSrc: chargen ,
                    link:'https://critical-hit-fantasy-character.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Whats for Dinner?',
                    subTitle: 'App That Helps You Decide What To Eat For Dinner',
                    imgSrc: food ,
                    link: 'https://jtcravey1991.github.io/allen-parsons-projekt/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'GitHub Repositories',
                    subTitle: 'Take A Look At Some Of My Other Work',
                    imgSrc:github,
                    link: 'https://github.com/Isaacm23?tab=repositories',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;