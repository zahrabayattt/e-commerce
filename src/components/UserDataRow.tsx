import { TableRow, TableCell } from '@/components/ui/table';
import { Check, X, Edit, Trash2 } from 'lucide-react';
import { type userDataRow } from '@/types/user.model';

const UserDataRow = ({
  user,
  editingEmailUser,
  editingNameUser,
  newEmail,
  newName,
  onEditEmail,
  onEditName,
  onEmailChange,
  onNameChange,
  onSave,
  onToggleAdmin,
  onDelete,
}: userDataRow) => {
  const isEditingEmail = editingEmailUser?._id === user._id;
  const isEditingName = editingNameUser?._id === user._id;

  return (
    <TableRow className="border-b border-gray-200 even:bg-gray-100 h-16">
      <TableCell className="text-right  ">{user._id}</TableCell>
      <TableCell className="text-right flex gap-3  py-6 ">
        {isEditingName ? (
          <>
            <Check
              onClick={onSave}
              className="  w-9 h-9 text-white bg-[#00B8D9] p-2 rounded-sm
                     hover:bg-[#008bbd] cursor-pointer "
            />
            <input
              className="bg-white p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none "
              type="text"
              value={newName}
              placeholder={user.username}
              onChange={(e) => onNameChange(e.target.value)}
            ></input>
          </>
        ) : (
          <>
            <Edit
              onClick={() => onEditName(user)}
              className="w-4 h-4 cursor-pointer hover:text-[#00B8D9] transition-colors"
            />
            <span className="font-medium">{user.username}</span>
          </>
        )}
      </TableCell>

      <TableCell className="text-right  py-6  ">
        <div className="flex gap-3">
          {isEditingEmail ? (
            <>
              <Check
                onClick={onSave}
                className=" w-9 h-9 text-white bg-[#00B8D9] p-2 rounded-sm cursor-pointer hover:bg-[#008bbd] "
              />
              <input
                autoFocus
                className="bg-white p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none"
                type="text"
                value={newEmail}
                placeholder={user.email}
                onChange={(e) => onEmailChange(e.target.value)}
              ></input>
            </>
          ) : (
            <>
              <Edit
                onClick={() => onEditEmail(user)}
                className="w-4 h-4 cursor-pointer hover:text-[#00B8D9] transition-colors "
              />
              {user.email}
            </>
          )}
        </div>
      </TableCell>
      <TableCell className="text-right  py-6 px-6">
        {user.isAdmin ? (
          <Check
            onClick={() => onToggleAdmin(user)}
            className="text-green-700 hover:w-6 hover:h-6  w-4 h-4 cursor-pointer"
          />
        ) : (
          <X
            onClick={() => onToggleAdmin(user)}
            className="text-red-700 w-4 h-4 cursor-pointer hover:w-6 hover:h-6"
          />
        )}
      </TableCell>
      <TableCell className="text-right  py-6 px-6 ">
        <Trash2
          onClick={() => onDelete(user._id)}
          className="text-red-700  w-5 h-5 cursor-pointer  rounded-full hover:text-red-500 transition-all "
        />
      </TableCell>
    </TableRow>
  );
};

export default UserDataRow;
