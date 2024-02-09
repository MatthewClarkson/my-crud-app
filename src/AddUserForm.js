// AddUserForm.js
import React, { useState } from 'react';
//Add User Form and handles
const AddUserForm = ({ addUser }) => {
  const [user, setUser] = useState({ name: '', job: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addUser(user);
    setUser({ name: '', job: '' });
  };
//Add user form,label,button
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Name:</label>
        <input type="text" className="input" name="name" value={user.name} onChange={handleChange} />
        <label className="label">Job:</label>
        <input type="text" className="input" name="job" value={user.job} onChange={handleChange} />
        <button type="submit" className="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
