import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <ul>
                    <h5>{contact.name}</h5>
                    <h5>{contact.expirationDate}</h5>
                </ul>
            ))}
        </div>
    )
};

export default Contacts