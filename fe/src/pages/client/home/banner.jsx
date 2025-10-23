export default function Banner() {
  const categories = [
    "Kinh doanh/Bán hàng",
    "Marketing/PR/Quảng cáo",
    "Chăm sóc khách hàng",
    "Nhân sự/Hành chính/Pháp chế",
    "Công nghệ Thông tin",
    "Lao động phổ thông",
    "Tài chính/Kế toán",
    "Ngân hàng",
    "Giáo dục/Đào tạo",
    "Y tế/Chăm sóc sức khỏe",
    "Vận tải/Kho bãi",
    "Xây dựng",
    "Sản xuất",
    "Nông nghiệp",
    "Thời trang/May mặc",
    "Truyền thông/Báo chí",
    "Luật/Pháp lý",
  ];

  const hotSearch = [
    "Tài xế",
    "Shipper",
    "Bảo vệ",
    "Thu ngân",
    "Công nhân",
    "Thợ cắt tóc",
    "Nhân viên bán hàng",
    "Nhân viên phục vụ",
    "Phụ bếp",
    "Lễ tân",
    "Thợ sửa điện lạnh",
    "Nhân viên buồng phòng",
    "Bảo mẫu",
    "Tạp vụ",
    "Nhân viên kho",
    "Nhân viên đóng gói",
    "Barista",
    "Thợ nail",
    "Thợ may",
  ];

  const workerJobs = [
    "Công nhân may",
    "Công nhân cơ khí",
    "Công nhân xây dựng",
    "Công nhân thời vụ",
    "Công nhân bốc xếp hàng hóa",
  ];

  return (
    <section className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 *:h-80">
        {/*Danh mục ngành - scroll dọc */}
        <div
          className="bg-white dark:bg-slate-900 rounded-lg shadow text-slate-800 dark:text-slate-100 "
        >
          <ul className="space-y-3 overflow-y-auto scrollbar-hide h-74 mt-3 px-4">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between cursor-pointer hover:text-blue-600 duration-150"
              >
                {cat}
                <span className="text-slate-400">›</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tìm kiếm nhiều */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-4 col-span-2 text-slate-800 dark:text-slate-100 overflow-hidden">
          <h3 className="font-semibold mb-3">Được tìm kiếm nhiều</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {hotSearch.map((job, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm rounded-full border border-red-400 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer"
              >
                🔥 {job}
              </span>
            ))}
          </div>

          <h3 className="font-semibold mb-3">Công nhân</h3>
          <div className="flex flex-wrap gap-2">
            {workerJobs.map((job, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 cursor-pointer"
              >
                {job}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
