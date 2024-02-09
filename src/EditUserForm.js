// EditUserForm.js
import React, { useState, useEffect } from 'react';

const EditUserForm = ({ editing, setEditing, currentUser, updateUser }) => {
  const [user, setUser] = useState(currentUser);
//useEffect hook for user and handle events
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(currentUser.id, user);
    setEditing(false);
  };
//Edit user form input and buttons
  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <label>Job:</label>
        <input type="text" name="job" value={user.job} onChange={handleChange} />
        <button type="submit">Update User</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUserForm;
