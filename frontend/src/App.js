import React, {Component} from 'react';
import Contacts from './components/Contacts'
import Users from './components/Users'
import './App.css';
import {Row, Col} from 'antd';
import InputForm from "./components/InputForm";
import mainLogo from './ContactMe.jpg';
import axios from 'axios';
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
        this.createContact = this.createContact.bind(this);
    }

    createContact(contact) {
        axios.post('http://localhost:8080/contact/contacts', contact)
            .then(res => {
                console.log(res.data);

                this.setState({
                    contacts: [...this.state.contacts, res.data]
                });
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <img src={mainLogo} alt="main logo" name="p1" width="80" height="80"/>
                    </Col>
                    <Col>
                        <h2>Contact Me!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputForm createContact={this.createContact}/>
                    </Col>
                </Row>
                <Row>
                    <Contacts contacts={this.state.contacts}/>
                </Row>
                <Row>
                    <Col>
                        <Users users={this.state.users}/>
                    </Col>
                </Row>

                <Router>
                    <Route exact path="/" component={SignInForm}></Route>
                    <Route exact path="/SignUpForm" render={(props)=> <SignUpForm {...props} createContact={this.createContact} />} ></Route>
                </Router>

                <Contacts contacts={this.state.contacts}/>

            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contact/contacts')
            .then(res => {
                this.setState({contacts: res.data});
            });

        // axios.get('http://localhost:8080/user/users')
        //     .then(res => {
        //         this.setState({users: res.data});
        //     });
    }
}

export default App;
