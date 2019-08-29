import React, {Component} from 'react';
import Contacts from './components/Contacts'
import Users from './components/Users'
import './App.css';
import {Row, Col, Radio} from 'antd';
import InputForm from "./components/InputForm";

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
        // axios.get('http://localhost:8080/contact/contacts')
        Promise.all([fetch('http://localhost:8080/contact/contacts'), fetch('http://localhost:8080/user/users')])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([res1, res2]) => {
                this.setState({contacts: res1});
                this.setState({users: res2});
            })
        // fetch('http://localhost:8080/contact/contacts')
        //     .then(res => res.json())
        //     .then((data) => {
        //         this.setState({contacts: data})
        //     })
        //     .catch(console.log)
    }

}

export default App;
