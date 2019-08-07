import React, {Component} from 'react';
import Contacts from './components/Contacts'
import './App.css';
import {Row, Col} from 'antd';
import InputForm from "./components/InputForm";

class App extends Component {
    state = {
        contacts: [],
    };

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
