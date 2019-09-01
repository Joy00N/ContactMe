import React, {Component} from 'react';
import Contacts from './components/Contacts'
import Users from './components/Users'
import './App.css';
import {Row, Col, Radio} from 'antd';
import InputForm from "./components/InputForm";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            users: [],
            contactType: 1,
        };

        this.onChange = this.onChange.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        let newContact = {name: this.state.name, expirationDate: this.state.expirationDate};
        this.props.createContact(newContact);
    }

    onChange(e) {
        this.setState({
            contactType: e.target.value
        });
    }

    createContact(contact) {
        // fetch('http://localhost:8080/contact/contacts',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(contact)
        //     })
        //     .then(
        //         res => null
        //     ).catch(e => console.log(e))
        console.log(contact);
        const data = {headers:{'Content-Type': 'application/json'}, body: JSON.stringify(contact)};
        axios.post('http://localhost:8080/contact/contacts', {data})
            .then(res => {
                console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <InputForm createContact={this.createContact}/>
                    </Col>
                    <Col>
                        <Radio.Group onChange={this.onChange} value={this.state.contactType}>
                            <Radio value={1}>Daily</Radio>
                            <Radio value={2}>BiWeekly</Radio>
                            <Radio value={3}>Monthly</Radio>
                        </Radio.Group>
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
            .then(res =>{
                this.setState({contacts: res.data});
            });

        axios.get('http://localhost:8080/user/users')
            .then(res =>{
                this.setState({users: res.data});
            });
    }

}

export default App;
