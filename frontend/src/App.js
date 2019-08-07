import React, {Component} from 'react';
import Contacts from './components/Contacts'
import './App.css';
import {Row, Col, Button} from 'antd';
import InputBox from "./components/InputBox";
import axios from 'axios';
import {catchClause} from "@babel/types";

class App extends Component {
    state = {
        contacts: [],
        name: '',
        expirationDate: '',
    };

    handleChange(v) {
        this.setState({
            input: v
        });
    }

    handleClick(e) {
        e.preventDefault();
        let newContact = {name: this.state.name, expirationDate: this.state.expirationDate};
        this.props.createContact(newContact);
    }

    createContact(contact) {
        fetch('http://localhost:8080/contact/contacts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            })
            .then(
                res => null
            ).catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <InputBox onChange={this.handleChange}/>
                    </Col>
                </Row>
                <Row>
                    <Button type="primary" onClick={this.handleClick}>Contact Me</Button>
                </Row>
                <Contacts contacts={this.state.contacts}/>
            </div>
        );
    }

    componentDidMount() {
        // axios.get('http://localhost:8080/contact/contacts')
        fetch('http://localhost:8080/contact/contacts')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

}

export default App;
