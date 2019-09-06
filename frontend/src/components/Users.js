import React from "react";

const Users = ({users}) => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td span={6}>Users List</td>
                </tr>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td span={6}>{user.id}</td>
                        <td span={6}>{user.firstName}</td>
                        <td span={6}>{user.lasttName}</td>
                        <td span={6}>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Users