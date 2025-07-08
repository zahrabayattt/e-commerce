import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow } from '@/components/ui/table';
import UserDataRow from '@/components/UserDataRow';
import type { User } from '@/types/user.model';
import useUsers from '@/hooks/use-users';
import { useUpdateUser } from '@/hooks/use-update-user';
import { useDeleteUser } from '@/hooks/use-delete-user';
import useChangeRole from '@/hooks/use-change-role';

const UsersPage: React.FC = () => {
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: ChangeRole } = useChangeRole();

  const { data, isLoading, isError } = useUsers();
  const [editingEmailUser, setEditingEmailUser] = useState<User | null>(null);
  const [editingNameUser, setEditingNameUser] = useState<User | null>(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطا در دریافت کاربران</p>;

  const handleSave = () => {
    if (editingEmailUser) {
      updateUser({
        _id: editingEmailUser._id,
        email: newEmail,
        username: editingEmailUser.username,
        isAdmin: editingEmailUser.isAdmin,
      });
    }
    if (editingNameUser) {
      updateUser({
        _id: editingNameUser._id,
        username: newName,
        email: editingNameUser.email,
        isAdmin: editingNameUser.isAdmin,
      });
    }
    setEditingEmailUser(null);
    setEditingNameUser(null);
  };

  const handleDelete = (id: string) => {
    deleteUser(id);
  };

  const handleEditEMail = (user: User) => {
    setEditingNameUser(null);
    setEditingEmailUser(user);
    setNewEmail(user.email);
  };

  const handleEditName = (user: User) => {
    setEditingNameUser(user);
    setEditingEmailUser(null);
    setNewName(user.username);
  };

  const handleToggleAdmin = (user: User) => {
    ChangeRole({ _id: user._id, isAdmin: !user.isAdmin });
  };

  return (
    <Table className="mt-10 mr-10">
      <TableHeader>
        <TableRow>
          <TableHead className="text-right text-2xl font-bold pb-4 ">ID</TableHead>
          <TableHead className="text-right text-2xl font-bold pb-4">نام</TableHead>
          <TableHead className="text-right text-2xl font-bold pb-4">ایمیل</TableHead>
          <TableHead className="text-right text-2xl font-bold pb-4">ادمین</TableHead>
          <TableHead className="text-right text-2xl font-bold pb-4">عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user) => (
          <UserDataRow
            key={user._id}
            user={user}
            onDelete={handleDelete}
            onEditEmail={handleEditEMail}
            onEditName={handleEditName}
            editingEmailUser={editingEmailUser}
            editingNameUser={editingNameUser}
            newEmail={newEmail}
            newName={newName}
            onEmailChange={setNewEmail}
            onNameChange={setNewName}
            onSave={handleSave}
            onToggleAdmin={handleToggleAdmin}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersPage;
