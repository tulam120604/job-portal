import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function EducationModal({ title, desc, icon }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen((pre) => !pre)}
        className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg 
    px-4 py-3 hover:shadow transition text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="text-rose-300">{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm opacity-85">{desc}</p>
          </div>
        </div>
        <button className="text-rose-400 hover:text-rose-600">
          <Plus size={18} />
        </button>
      </div>

      {/* modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 sideDown">
          <div
            className="bg-white dark:bg-gray-900 rounded-lg text-gray-700 
      dark:text-gray-300 w-[900px] shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">Học vấn</h2>
              <button
                onClick={() => setOpen((pre) => !pre)}
                className="text-gray-500 hover:opacity-70 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              {/* Trường */}
              <div>
                <label className="block font-medium mb-1">
                  Trường <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tên trường học..."
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1"
                />
              </div>

              {/* Trình độ & Ngành học */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Trình độ <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 cursor-pointer 
                  focus:ring-rose-400 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                    <option value="">Chọn trình độ</option>
                    <option value="daihoc">Đại học</option>
                    <option value="caodang">Cao đẳng</option>
                    <option value="thacsi">Thạc sĩ</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Ngành học <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Công nghệ thông tin"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="isStudying" className="w-4 h-4" />
                <label htmlFor="isStudying" className="opacity-70">
                  Tôi đang theo học tại đây
                </label>
              </div>

              {/* Thời gian học */}
              <div>
                <label className="block font-medium mb-1">
                  Từ <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-4 *:cursor-pointer *:bg-white 
                *:dark:bg-gray-900 *:text-gray-700 *:dark:text-gray-300">
                  <select className="border rounded-md px-3 py-2">
                    <option>Tháng</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border rounded-md px-3 py-2">
                    <option>Năm</option>
                    {Array.from({ length: 30 }, (_, i) => (
                      <option key={i}>{2025 - i}</option>
                    ))}
                  </select>

                  <select className="border rounded-md px-3 py-2">
                    <option>Tháng</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border rounded-md px-3 py-2">
                    <option>Năm</option>
                    {Array.from({ length: 30 }, (_, i) => (
                      <option key={i}>{2025 - i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Thông tin khác */}
              <div>
                <label className="block font-medium mb-1">
                  Thông tin chi tiết khác
                </label>
                <textarea
                  placeholder="Ví dụ: Điểm trung bình, thành tích, hoạt động..."
                  className="w-full border rounded-md p-3 resize-none focus:outline-none focus:ring-1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 *:duration-200">
              <button onClick={() => setOpen(pre => !pre)}
              className="px-5 py-2 rounded-md hover:opacity-70 cursor-pointer">
                Hủy
              </button>
              <button onClick={() => setOpen(pre => !pre)}
                className="px-6 py-2 rounded-md bg-rose-500 text-white font-semibold 
          hover:bg-rose-600 hover:opacity-70 cursor-pointer"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
