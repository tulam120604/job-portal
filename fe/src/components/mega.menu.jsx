
export default function MegaMenu() {
  return (
    <div className="absolute -left-3 top-full mt-2 w-[900px] bg-[#1a1f2b] shadow-lg rounded-xl p-6 flex gap-10 text-sm z-50 text-gray-200">
      {/* Cột 1 */}
      <div className="flex flex-col gap-3 min-w-[180px]">
        <h3 className="font-semibold text-gray-300">VIỆC LÀM</h3>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>🔍</span> Tìm việc làm
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>🔖</span> Việc làm đã lưu
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>📄</span> Việc làm đã ứng tuyển
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>✅</span> Việc làm phù hợp
        </a>

        <h3 className="font-semibold text-gray-300 mt-4">CÔNG TY</h3>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>🏢</span> Danh sách công ty
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-green-500">
          <span>⭐</span> Top công ty
        </a>
      </div>

      {/* Cột 2 */}
      <div className="flex flex-col gap-3 min-w-[200px]">
        <h3 className="font-semibold text-gray-300">VIỆC LÀM THEO VỊ TRÍ</h3>
        <a href="#" className="hover:text-green-500">Việc làm Nhân viên kinh doanh</a>
        <a href="#" className="hover:text-green-500">Việc làm Kế toán</a>
        <a
          href="#"
          className="hover:text-green-500 bg-green-900/30 px-2 py-1 rounded-md text-green-400"
        >
          Việc làm Marketing →
        </a>
        <a href="#" className="hover:text-green-500">Việc làm Hành chính nhân sự</a>
        <a href="#" className="hover:text-green-500">Việc làm Chăm sóc khách hàng</a>
        <a href="#" className="hover:text-green-500">Việc làm Ngân hàng</a>
        <a href="#" className="hover:text-green-500">Việc làm IT</a>
      </div>

      {/* Cột 3 */}
      <div className="flex flex-col gap-3 min-w-[200px] mt-6">
        <a href="#" className="hover:text-green-500">Việc làm Lao động phổ thông</a>
        <a href="#" className="hover:text-green-500">Việc làm Senior</a>
        <a href="#" className="hover:text-green-500">Việc làm Kỹ sư xây dựng</a>
        <a href="#" className="hover:text-green-500">Việc làm Thiết kế đồ họa</a>
        <a href="#" className="hover:text-green-500">Việc làm Bất động sản</a>
        <a href="#" className="hover:text-green-500">Việc làm Giáo dục</a>
        <a href="#" className="hover:text-green-500">Việc làm telesales</a>
      </div>
    </div>
  );
}
