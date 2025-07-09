import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import toast from 'react-hot-toast';
import useGetCategories from '@/hooks/use-get-categories';
import useCreateCategory from '@/hooks/use-create-category';
import CategoryRow from '@/components/CategoryDataRow';

const createCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const { data: categories = [] } = useGetCategories();
  const { mutate: createCategory } = useCreateCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) {
      toast.error('لطفا نام دسته‌ بندی را وارد کنید');
      return;
    }
    createCategory(
      { name: newCategoryName },
      {
        onSuccess: () => {
          setNewCategoryName('');
        },
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-10">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-xl text-gray-700 font-bold pb-5">نام دسته‌بندی</label>
          <Input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="نام دسته‌بندی را وارد نمایید"
          />
        </div>
        <Button type="submit" className="mt-5">
          ساخت دسته‌بندی جدید
        </Button>
      </form>
      <div>
        {categories.length === 0 ? (
          <p className="text-gray-500 text-center py-4">هیچ دسته‌بندی وجود ندارد</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right font-bold text-[18px] pb-4">
                  نام دسته‌بندی
                </TableHead>
                <TableHead className="text-left px-5 font-bold text-[18px] pb-4">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <CategoryRow key={category._id} category={category} />
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default createCategory;
