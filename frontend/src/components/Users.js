import {Col, Row} from "antd";
import React from "react";

const Users = ({users}) => {
    return (
        <div>
            <Row><Col span={6}>Users List</Col></Row>
            {users.map((user) => (
                <Row key={user.id}>
                    <Col span={6}>{user.id}</Col>
                    <Col span={6}>{user.firstName}</Col>
                    <Col span={6}>{user.lasttName}</Col>
                    <Col span={6}>{user.email}</Col>
                </Row>
            ))}
        </div>
    )
};

export default Users