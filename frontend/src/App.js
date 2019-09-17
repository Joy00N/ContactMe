import React, {Component} from 'react';
import Contacts from './components/Contacts'
import Users from './components/Users'
import './App.css';
import {Col, Row, Button} from 'antd';
import InputForm from "./components/InputForm";
import mainLogo from './ContactMe.jpg';
import axios from 'axios';
import autoBind from 'react-autobind';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            expiredContacts: []
        };
        autoBind();
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


    handleClick(e) {

        axios.get('http://localhost:8080/contact/sendEmail')
            .then(res => {

            })
            .catch(error => {
                console.log(error.response);
            });

        alert("email sent");
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
                    <Col>Users</Col>
                    <Col>
                        <Users users={this.state.users}/>
                    </Col>
                </Row>

                <Row>
                    <Col>Expired Contacts</Col>
                    <Col>
                        <Contacts contacts={this.state.expiredContacts}/>
                    </Col>
                </Row>

                <Row>
                    <Button type="primary" onClick={this.handleClick} href="/sendEmail">Send Notification</Button>
                </Row>
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contact/contacts')
            .then(res => {
                this.setState({contacts: res.data});
            });

        axios.get('http://localhost:8080/user/users')
            .then(res => {
                this.setState({users: res.data});
            });

        axios.get('http://localhost:8080/contact/contacts/expired')
            .then(res => {
                this.setState({expiredContacts: res.data});
            });
    }
}

export default App;
