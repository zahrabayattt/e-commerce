import { Button } from '@/components/ui/button';
import React from 'react';

const NewProductForm: React.FC = () => {
  return (
      <div className="flex flex-1 p-8 justify-center">
        <div className="w-full max-w-3xl p-6">
          <h2 className="text-lg font-bold mb-6 text-right">محصول جدید</h2>
          <div className="w-full mb-6">
            <label
              htmlFor="product-image"
              className="bg-white w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-md h-24 flex items-center justify-center text-gray-500"
            >
              آپلود عکس
            </label>
            <input id="product-image" type="file" className="hidden" />
          </div>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-700">نام</label>
              <input
                type="text"
                placeholder="نام محصول را وارد نمایید"
                className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="md:flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm text-gray-700">قیمت</label>
                <input
                  type="number"
                  placeholder="قیمت محصول را وارد نمایید"
                  className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block mb-1 text-sm text-gray-700">برند</label>
                <input
                  type="text"
                  placeholder="برند محصول را وارد نمایید"
                  className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">توضیحات</label>
              <textarea
                placeholder="توضیحات محصول را وارد نمایید"
                rows={4}
                className="bg-white w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <div className="md:flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm text-gray-700">تعداد قابل خرید</label>
                <input
                  type="number"
                  placeholder="تعداد قابل خرید را وارد نمایید"
                  className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block mb-1 text-sm text-gray-700">موجودی</label>
                <select className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>موجودی</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              {/* <Button size={'sm'}>ثبت نظر</Button> */}
              <Button type="submit">ساخت محصول جدید</Button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default NewProductForm;
