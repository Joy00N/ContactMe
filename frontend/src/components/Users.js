import React, {Component} from 'react'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    render() {

        return (
            this.state.users.map((user) => (
                <tr key={user.id}>
                    {/*<td span={6}>{user.id}</td>*/}
                    <td span={6}>{user.username}</td>
                    <td span={6}>{user.password}</td>
                    <td span={6}>{user.firstname}</td>
                    <td span={6}>{user.lastname}</td>
                    <td span={6}>{user.email}</td>
                    <td span={6}>{user.phone}</td>
                </tr>
            ))
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contacts: nextProps.contacts
        });
    }
}

export default Users