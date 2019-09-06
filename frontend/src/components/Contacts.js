import React, {Component} from 'react'
import axios from 'axios';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td span={18}>Contact List</td>
                    </tr>
                    {this.state.contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td span={6}>{contact.name}</td>
                            <td span={6}>{contact.openingDate}</td>
                            <td span={6}>{contact.contactType}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contacts: nextProps.contacts
        });
    }
}

export default Contacts