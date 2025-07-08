import React, { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
}

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Ali Mousavi',
    email: 'Ali.mousavi@gmail.com',
    status: 'active',
  },
  {
    id: '2',
    name: 'Mahdi Shoeni',
    email: 'mahdishoeni@gmail.com',
    status: 'inactive',
  },
  {
    id: '3',
    name: 'Example User',
    email: 'example@gmail.com',
    status: 'inactive',
  },
];

const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setNewName(user.name);
    setNewEmail(user.email);
  };

  const handleSave = () => {
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? { ...user, name: newName, email: newEmail } : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
    }
  };

  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="py-2 px-4">Actions</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(user)}
                ></button>
                <button
                  className="text-red-500 hover:text-red-700 mx-2"
                  onClick={() => handleDelete(user.id)}
                ></button>
              </td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                {user.status === 'active' ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </td>
              <td className="py-2 px-4">{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border p-2 mt-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border p-2 mt-2"
          />
          <button onClick={handleSave} className="mt-2 bg-blue-500 text-white p-2">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
