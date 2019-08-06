import React, {Component} from 'react';
import Contacts from './components/Contacts'
import './App.css';
import {Row, Col} from 'antd';
import InputBox from "./components/InputBox";
import axios from 'axios';

class App extends Component {
    state = {
        contacts: [],
        input: '',
    };

    handleChange(v){
        this.setState({
            input:v
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <InputBox onChange={this.handleChange}/>
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
