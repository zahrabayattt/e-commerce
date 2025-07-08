export type User = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface userDataRow {
  user: User;
  editingEmailUser: User | null;
  editingNameUser: User | null;
  newEmail: string;
  newName: string;
  onEditEmail: (user: User) => void;
  onEditName: (user: User) => void;
  onEmailChange: (val: string) => void;
  onNameChange: (val: string) => void;
  onSave: () => void;
  onDelete: (id: string) => void;
  onToggleAdmin: (user: User) => void;
}
