import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function LanguageModal({ title, desc, icon }) {
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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="bg-white dark:bg-gray-900 rounded-lg text-gray-700 
      dark:text-gray-300 w-[900px] shadow-lg overflow-hidden sideDown"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold">Ngôn ngữ</h2>
              <button
                onClick={() => setOpen((pre) => !pre)}
                className="text-gray-500 hover:opacity-70 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              {/* Trình độ & Ngành học */}
              <div className="grid grid-cols-[1fr_1fr_40px] gap-4">
                <div>
                  <select
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 cursor-pointer 
                  focus:ring-rose-400 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                  >
                    <option value="">Chọn ngôn ngữ</option>
                    <option value="daihoc">Tiếng Việt</option>
                    <option value="caodang">Tiếng Anh</option>
                    <option value="thacsi">Tiếng Nhật</option>
                    <option value="thacsi">Tiếng Trung</option>
                    <option value="thacsi">Tiếng Hàn</option>
                  </select>
                </div>

                <div>
                  <select
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 cursor-pointer 
                  focus:ring-rose-400 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                  >
                    <option value="">Chọn trình độ</option>
                    <option value="daihoc">Đại học</option>
                    <option value="caodang">Cao đẳng</option>
                    <option value="thacsi">Thạc sĩ</option>
                  </select>
                </div>

                {/* add */}
                <button className="bg-rose-500 hover:bg-rose-600 hover:opacity-70 duration-150 
                rounded grid place-content-center cursor-pointer">
                    <Plus size={16}/>
                </button>
              </div>

              {/* list language */}
              <div className="min-h-[200px] grid place-content-center">
                <span>Chưa có ngôn ngữ nào</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 *:duration-200">
              <button
                onClick={() => setOpen((pre) => !pre)}
                className="px-5 py-2 rounded-md hover:opacity-70 cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => setOpen((pre) => !pre)}
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
