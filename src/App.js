// Importing files and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import './App.css';
//Setting State 
function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', job: '' });
//Using get,post,delete,update, edit and error handling
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => setUsers(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const addUser = user => {
    axios.post('https://reqres.in/api/users', user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error(error));
  };

  const deleteUser = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  const updateUser = (id, updatedUser) => {
    axios.put(`https://reqres.in/api/users/${id}`, updatedUser)
      .then(() => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
      })
      .catch(error => console.error(error));
  };

  const editUser = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.first_name, job: user.job });
  };

  return (
    <div className="App">
      <h1>CRUD Operations with React</h1>
      {editing ? (
        <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
        />
      ) : (
        <AddUserForm addUser={addUser} />
      )}
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;



