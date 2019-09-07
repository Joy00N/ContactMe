import React, {Component} from 'react';
import Contacts from './components/Contacts'
import Users from './components/Users'
import './App.css';
import {Row, Col} from 'antd';
import InputForm from "./components/InputForm";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            users: []
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
                    <Col span={6}>
                        <InputForm createContact={this.createContact}/>
                    </Col>
                </Row>


                <Row>
                    <Contacts contacts={this.state.contacts}/>
                </Row>
                <Row>
                    <Users users={this.state.users}/>
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
    }
}

export default App;
