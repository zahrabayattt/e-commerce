import { Button } from '@/components/ui/button';

const CreateCategory = () => {
  return (
    <div className="flex justify-center mx-auto p-8">
      <div className="w-full max-w-md p-6">
        <h2 className="text-lg font-bold mb-6">دسته‌بندی جدید</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-700">نام دسته‌بندی</label>
            <input
              type="text"
              placeholder="نام دسته‌بندی را وارد نمایید"
              className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mt-4">
            <Button type="submit">ساخت دسته‌بندی جدید</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
