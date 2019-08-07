import React from 'react'
import {Input, Button} from 'antd';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            expirationDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        console.log("NAME: " + e.target.name + " VALUE: " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        let newContact = {name: this.state.name, expirationDate: this.state.expirationDate};
        this.props.createContact(newContact);
    }

    render() {
        return (
            <div>
                User Name: <Input name="name" onChange={this.handleChange}/>
                Expiration Date: <Input name="expirationDate" onChange={this.handleChange}/>
                <Button type="primary" onClick={this.handleClick}>Contact Me</Button>
            </div>
        )
    }

};

export default InputForm