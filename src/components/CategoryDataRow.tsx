import { useState } from 'react';
import { TableRow, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { SquarePen, Trash, Check } from 'lucide-react';
import type { CategoryResponseModel } from '@/types/category.model';
import useDeleteCategory from '@/hooks/use-delete-category';
import useUpdateCategory from '@/hooks/use-update-category';

interface ICategory {
  category: CategoryResponseModel;
}

const CategoryDataRow = ({ category }: ICategory) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(category.name);
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: updateCategory } = useUpdateCategory();

  const handleSave = () => {
    if (!editedName.trim()) return;

    updateCategory(
      {
        id: category._id,
        payload: { name: editedName },
      },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      }
    );
  };

  return (
    <TableRow className="even:bg-gray-100">
      <TableCell className="text-right">
        {isEditing ? (
          <div className="flex items-center gap-3">
            <Check
              onClick={handleSave}
              className="w-8 h-8 text-white bg-[#00B8D9] p-2 rounded-sm hover:bg-[#008bbd] cursor-pointer"
            />
            <Input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          </div>
        ) : (
          category.name
        )}
      </TableCell>
      <TableCell className="flex justify-end gap-2">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 hover:bg-[#DB2777] hover:text-white"
          onClick={() => setIsEditing(true)}
        >
          <SquarePen className="w-4 h-4" />
        </button>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 hover:bg-[#DB2777] hover:text-white"
          onClick={() => deleteCategory(category._id)}
        >
          <Trash className="w-4 h-4" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CategoryDataRow;
