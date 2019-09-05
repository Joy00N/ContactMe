import React from 'react'
import {Input, Button, Radio, DatePicker} from 'antd';
import 'antd/dist/antd.css';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            openingDate: '',
            contactType: 'daily'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDatePicker = this.handleDatePicker.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDatePicker(date, dateString) {
        this.setState({
            openingDate: dateString
        });
    }

    handleClick(e) {
        e.preventDefault();
        let newContact = {
            name: this.state.name,
            openingDate: this.state.openingDate,
            contactType: this.state.contactType
        };
        this.props.createContact(newContact);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Product Name:</td>
                        <td>
                            <Input name="name" onChange={this.handleChange}/>
                        </td>
                        <td>Opening Date:</td>
                        <td>
                            <DatePicker name="openingDate" onChange={this.handleDatePicker}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Contact Lenses Type</td>
                        <td>
                            <Radio.Group onChange={this.handleChange} name="contactType"
                                         value={this.state.contactType}>
                                <Radio value="daily">Daily</Radio>
                                <Radio value="biWeekly">BiWeekly</Radio>
                                <Radio value="monthly">Monthly</Radio>
                            </Radio.Group>
                        </td>
                    </tr>
                    <tr>
                        <td><Button type="primary" onClick={this.handleClick}>Contact Me</Button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

};

export default InputForm