import { Link } from "react-router";

export default function MegaMenu() {
  return (
    <div className="absolute -left-3 top-full mt-2 bg-[#1a1f2b] shadow-lg 
    rounded-xl p-6 flex gap-10 text-sm z-50 text-gray-200 sideDown">
      {/* Cột 1 */}
      <div className="flex flex-col gap-3 min-w-[180px]">
        <h3 className="font-semibold text-gray-300">VIỆC LÀM</h3>
        <Link to="/savejob" className="flex items-center gap-2 hover:text-green-500">
          <span>🔖</span> Việc làm đã lưu
        </Link>
        <Link to="/historyjob" className="flex items-center gap-2 hover:text-green-500">
          <span>📄</span> Việc làm đã ứng tuyển
        </Link>
        <Link to="#" className="flex items-center gap-2 hover:text-green-500">
          <span>✅</span> Việc làm phù hợp
        </Link>
      </div>

      {/* Cột 2 */}
     <div className="flex gap-3 items-end whitespace-nowrap">
        {/* ** */}
       <div className="flex flex-col gap-3 min-w-[200px]">
        <h3 className="font-semibold text-gray-300">VIỆC LÀM THEO VỊ TRÍ</h3>
        <Link to="#" className="hover:text-green-500">Việc làm Nhân viên kinh doanh</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Kế toán</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Hành chính nhân sự</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Chăm sóc khách hàng</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Ngân hàng</Link>
        <Link to="#" className="hover:text-green-500">Việc làm IT</Link>
      </div>

        {/* ** */}
      <div className="flex flex-col gap-3 min-w-[200px]">
        <Link to="#" className="hover:text-green-500">Việc làm Lao động phổ thông</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Kỹ sư xây dựng</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Thiết kế đồ họa</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Bất động sản</Link>
        <Link to="#" className="hover:text-green-500">Việc làm Giáo dục</Link>
        <Link to="#" className="hover:text-green-500">Việc làm telesales</Link>
      </div>
     </div>
    </div>
  );
}
