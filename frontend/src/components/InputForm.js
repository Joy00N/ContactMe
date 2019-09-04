import React from 'react'
import {Input, Button, Radio} from 'antd';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            expirationDate: '',
            contactType: 'daily'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        let newContact = {name: this.state.name, expirationDate: this.state.expirationDate, contactType: this.state.contactType};
        this.props.createContact(newContact);
    }

    render() {
        return (
            <div>
                User Name: <Input name="name" onChange={this.handleChange}/>
                Expiration Date: <Input name="expirationDate" onChange={this.handleChange}/>
                <Button type="primary" onClick={this.handleClick}>Contact Me</Button>
                <Radio.Group onChange={this.handleChange} name="contactType" value={this.state.contactType}>
                    <Radio value="daily">Daily</Radio>
                    <Radio value="biWeekly">BiWeekly</Radio>
                    <Radio value="monthly">Monthly</Radio>
                </Radio.Group>
            </div>
        )
    }

};

export default InputForm