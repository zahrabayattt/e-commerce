import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';

const CategoriesPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Create Category Card */}
      <Card>
        <CardHeader>
          <CardTitle>دسته‌بندی جدید</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-700">نام دسته‌بندی</label>
              <input
                type="text"
                // value={}
                // onChange={}
                placeholder="نام دسته‌بندی را وارد نمایید"
                className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mt-4">
              <Button type="submit">ساخت دسته‌بندی جدید </Button>
            </div>
          </form>
        </CardContent>

        {/* Categories List */}
        <CardHeader>
          <CardTitle>لیست دسته‌بندی‌ها</CardTitle>
        </CardHeader>
        <CardContent>
          {categories.length === 0 ? (
            <p className="text-gray-500 text-center py-4">هیچ دسته‌بندی وجود ندارد</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>نام دسته‌بندی</TableHead>
                  <TableHead className="text-left">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell className="flex justify-end space-x-2">
                      <Button
                        size="icon"
                        // onClick={}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        // onClick={}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesPage;
