// UserList.js
import React from 'react';
//Making UserList with edit and delete buttons
const UserList = ({ users, deleteUser, editUser }) => (
  <div>
    <h2>User List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.first_name} {user.last_name}
          <button className="button" onClick={() => editUser(user)}>Edit</button>
          <button className="button" onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
