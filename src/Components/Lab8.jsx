import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_URL = 'https://67d1b1ac90e0670699bb2d95.mockapi.io/schema';

const Lab8 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    role: 1,
    password: ''
  });
  const [editingId, setEditingId] = useState(null); // Track the user being edited

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing user
        await axios.put('${API_URL}/${editingId}', formData);
        setEditingId(null);
      } else {
        // Add new user
        await axios.post(API_URL, formData);
      }
      fetchUsers();
      setFormData({ fullname: '', email: '', role: 1, password: '' });
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      password: '' // Reset password for security reasons
    });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('${API_URL}/${id}');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>User Management</h2>

      <form onSubmit={handleSubmit}>
        
        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required style={{ color: "white",   }}/>
        <br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <br />
        <select name="role" value={formData.role} onChange={handleChange} required style={{ color:"white",height: "25px" }}> 
          <option value="1">Admin1</option>
          <option value="2">Admin2</option>
          <option value="3">User1</option>
          <option value="4">User2</option>
        </select>
        <button type="submit">{editingId ? 'Save Changes' : 'Add User'}</button>
      </form>

      <table border="1">
        <thead>
          <tr style={{ backgroundColor: "yellow" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (            
            <tr key={user.id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>Role: {user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)} style={{ marginLeft: "5px" }}>Delete</button>
              </td>
            </tr>             
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab8;