import React, {Component} from 'react'
import {Table} from 'antd'

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: text => <a>{text}</a>,
    },
    {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastname',
        key: 'lastname',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    }
];

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.users} rowKey="id"/>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users
        });
    }
}

export default Users