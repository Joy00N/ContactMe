import React from 'react'
import {Row, Col} from 'antd';

const Contacts = ({contacts}) => {
    return (
        <div>
            <Row><Col span={6}>Contact List</Col></Row>
            {contacts.map((contact) => (
                <Row>
                    <Col span={6}>{contact.name}</Col>
                    <Col span={6}>{contact.expirationDate}</Col>
                    <Col span={6}>{contact.contactType}</Col>
                </Row>
            ))}
        </div>
    )
};

export default Contacts