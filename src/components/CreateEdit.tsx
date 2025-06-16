import React, { useState, useEffect } from "react";

const ProductFormWithImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    brand: "",
    description: "",
    stock: 1,
    quantity: 1,
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSelectedImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "price" && Number(value) < 0) return;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const productData = { ...product, image: selectedImage };
    console.log("✅ محصول آماده ارسال:", productData);
  };

  const handleDelete = () => {
    console.log("❌ محصول حذف شد");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white py-10 px-4">
      {/* 🔘 سوییچ تم */}
      {/* <div className="flex justify-center mb-6">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-blue-500 text-white dark:bg-yellow-400 dark:text-black transition-colors"
        >
          {isDarkMode ? "حالت روشن" : "حالت تاریک"}
        </button>
      </div> */}

      <div className="w-[1094px] mx-auto h-auto bg-gray-100 dark:bg-black rounded-xl shadow-lg p-6 space-y-6">

        {/* 🔹 پیش‌نمایش عکس */}
        <div className="w-full h-72 bg-gray-100 dark:bg-black flex items-center justify-center rounded-md overflow-hidden">
          {selectedImage ? (
            <img src={selectedImage} alt="Preview" className="max-h-full object-contain" />
          ) : (
            <span className="text-gray-500">عکسی انتخاب نشده</span>
          )}
        </div>

        {/* 🔹 انتخاب فایل */}
        <div className="w-full">
  <input
    type="file"
    id="imageUpload"
    accept="image/*"
    onChange={handleFileChange}
    className="hidden"
  />

  <label
    htmlFor="imageUpload"
    className="w-full h-[124px] bg-gray-100 dark:bg-[#3F4043]
              border border-dashed border-gray-400 dark:border-gray-600
              rounded-md cursor-pointer flex items-center justify-center
              text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700
              transition-colors"
  >
    آپلود عکس
  </label>
</div>


        {/* 🔻 فرم اطلاعات محصول */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">نام محصول</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="مثلاً: آیفون 14"
              className="input-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="brand" className="block mb-1 text-sm">برند</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                placeholder="مثلاً: اپل"
                className="input-dark"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 text-sm">قیمت</label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="مثلاً: 10000"
                min={0}
                className="input-dark"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 text-sm">توضیحات</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="توضیحات محصول را وارد کنید"
              rows={3}
              className="input-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="stock" className="block mb-1 text-sm">موجودی</label>
              <select
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="input-dark"
              >
                {[1, 2, 3, 4, 5, 10].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block mb-1 text-sm">تعداد قابل خرید</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                placeholder="مثلاً: 2"
                className="input-dark"
              />
            </div>
          </div>
        </div>

        {/* 🔘 دکمه‌ها */}
        <div className="flex justify-start  gap-4 pt-4">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white"
          >
            حذف محصول
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 text-white"
          >
            بروزرسانی محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFormWithImage;
