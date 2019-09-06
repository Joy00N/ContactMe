import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td span={18}>Contact List</td>
                </tr>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td span={6}>{contact.name}</td>
                        <td span={6}>{contact.openingDate}</td>
                        <td span={6}>{contact.contactType}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Contacts