import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');
    const [users, setUsers] = useState([
        { username: 'Rachna', email: 'rachnaaulakh@gmail.com', role: 'user' },
        { username: 'admin', email: 'harpreet@gmail.com', role: 'admin' }
    ]);

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, role };
        setUsers([...users, newUser]);
        setUsername('');
        setEmail('');
        setRole('user');
        alert('User added');
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        alert('User deleted');
    };

    return (
        <div className="admin">
            <h2>Admin Form</h2>

            <section className="admin-main">
                <h3>Add New User</h3>
                <form onSubmit={handleAddUser}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label>Role:</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit">Add User</button>
                </form>
            </section>

            <section className="admin-main">
                <h3>Manage Users History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Admin;