import React, {Component} from 'react'
import {Table} from 'antd'

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Contact Type',
        dataIndex: 'contactType',
        key: 'contactType',
    },
    {
        title: 'Opening Date',
        dataIndex: 'openingDate',
        key: 'openingDate',
    },
    {
        title: 'Expiration Date',
        dataIndex: 'expirationDate',
        key: 'expirationDate',
    }
];

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.contacts} rowKey="name"/>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contacts: nextProps.contacts
        });
    }
}

export default Contacts