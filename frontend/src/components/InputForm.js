import React from 'react'
import {Input, Button, Radio, DatePicker, Menu, Dropdown, Icon} from 'antd';
import 'antd/dist/antd.css';
import '../css/bootstrap.css';


const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">Biofinity</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">One day Acuvue</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">Total 1</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Other</Menu.Item>
    </Menu>
);

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
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                Select<Icon type="down" />
                            </a>
                        </Dropdown>

                        {/*<div className="dropdown">*/}
                        {/*    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">Select*/}
                        {/*        <span className="caret"> </ span></button>*/}
                        {/*    <ul className="dropdown-menu" role="menu">*/}
                        {/*        <li role="presentation">*/}
                        {/*            <a href="#">Biofinity</a>*/}
                        {/*        </li>*/}
                        {/*        <li role="presentation">*/}
                        {/*            <a href="#">One day Acuvue</a>*/}
                        {/*        </li>*/}
                        {/*        <li role="presentation">*/}
                        {/*            <a href="#">Total one</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}


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