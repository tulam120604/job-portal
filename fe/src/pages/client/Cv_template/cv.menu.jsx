export default function CvTemplateMenu() {
  const categories = [
    "Tất cả",
    "Đơn giản",
    "Chuyên nghiệp",
    "Hiện đại",
    "Ấn tượng",
    "Harvard",
    "ATS",
  ];

  return (
    <>
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Mẫu CV xin việc tiếng Việt chuẩn 2025
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Tuyển chọn 71 mẫu CV đa dạng phong cách, giúp bạn tạo dấu ấn cá nhân
          và kết nối mạnh mẽ hơn với nhà tuyển dụng.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mt-6">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
              idx === 0
                ? "bg-green-600 text-white border-green-600"
                : "text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-green-50 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}

        {/* Language Dropdown */}
        <div className="ml-auto">
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium 
          text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
            <span className="text-red-500 text-lg">★</span> Tiếng Việt ▾
          </button>
        </div>
      </div>
    </>
  );
}
