import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function WorkExperienceModal({ title, desc, icon }) {
  const [currentJob, setCurrentJob] = useState(false);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className="bg-white dark:bg-gray-900 rounded-lg text-gray-700 
      dark:text-gray-300 w-[700px] max-h-[90vh] overflow-y-auto shadow-lg sideDown"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-semibold">Kinh nghiệm làm việc</h2>
              <button
                onClick={() => setOpen((pre) => !pre)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Chức danh */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Chức danh *
                </label>
                <input
                  type="text"
                  placeholder="Nhập chức danh"
                  className="w-full border rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              {/* Tên công ty */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tên công ty *
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên công ty"
                  className="w-full border rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="currentJob"
                  checked={currentJob}
                  onChange={() => setCurrentJob(!currentJob)}
                />
                <label htmlFor="currentJob">Tôi đang làm việc tại đây</label>
              </div>

              {/* Thời gian */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Từ *</label>
                  <div className="flex space-x-2 *:bg-white *:dark:bg-gray-900 
                      *:text-gray-700 *:dark:text-gray-300 *:cursor-pointer">
                    <select className="border rounded-md p-2 w-1/2">
                      <option>Tháng</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i}>Tháng {i + 1}</option>
                      ))}
                    </select>
                    <select className="border rounded-md p-2 w-1/2">
                      <option>Năm</option>
                      {Array.from({ length: 30 }, (_, i) => (
                        <option key={i}>{2000 + i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {!currentJob && (
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Đến *
                    </label>
                    <div className="flex space-x-2 *:bg-white *:dark:bg-gray-900 
                      *:text-gray-700 *:dark:text-gray-300 *:cursor-pointer">
                      <select className="border rounded-md p-2 w-1/2">
                        <option>Tháng</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i}>Tháng {i + 1}</option>
                        ))}
                      </select>
                      <select className="border rounded-md p-2 w-1/2">
                        <option>Năm</option>
                        {Array.from({ length: 30 }, (_, i) => (
                          <option key={i}>{2000 + i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Mô tả chi tiết */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mô tả chi tiết
                </label>
                <div className=" border-l-4 border-orange-400 p-2 text-sm mb-2">
                  <strong>Tips:</strong> Tóm lược lĩnh vực công ty bạn đã làm,
                  nêu các trách nhiệm và kết quả đạt được trong công việc. Sử
                  dụng phần
                  <strong> "Dự án"</strong> bên dưới để mô tả dự án bạn đã tham
                  gia.
                </div>
                <textarea
                  rows="5"
                  className="w-full border rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                ></textarea>
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
