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
                        {/*<td span={6}>{user.id}</td>*/}
                        <td span={6}>{user.username}</td>
                        <td span={6}>{user.password}</td>
                        <td span={6}>{user.firstname}</td>
                        <td span={6}>{user.lastname}</td>
                        <td span={6}>{user.email}</td>
                        <td span={6}>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Users