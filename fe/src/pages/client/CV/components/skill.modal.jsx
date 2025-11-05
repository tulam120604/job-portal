import { X, Bold, Italic, Underline, List, Plus } from "lucide-react";
import { useState } from "react";

export default function Skill_modal({ title, desc, icon }) {
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div
            className="bg-white dark:bg-gray-900 rounded-lg text-gray-700 
      dark:text-gray-300 w-[700px] shadow-lg overflow-hidden sideDown"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5">
              <h2 className="text-xl font-semibold opacity-90">
                Kĩ năng
              </h2>
              <button onClick={() => setOpen((pre) => !pre)} 
              className="text-gray-500 hover:opacity-70 cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Tip */}
            <div className="px-6 py-3 text-sm">
              <span className="inline-flex items-center gap-2 opacity-70">
                <span className="bg-orange-100 text-orange-600 rounded p-1 font-bold text-xs">
                  Tip
                </span>
                Việc tạo kỹ năng chuyên môn theo nhóm giúp nhà tuyển dụng nhanh chóng hiểu được năng lực chuyên môn của bạn.
              </span>
            </div>

            {/* Textarea (giả rich editor) */}
            <div className="p-6">
              <div className="border rounded-md">
                {/* Toolbar */}
                <div className="flex items-center gap-3 border-b px-3 py-2">
                  <button className="hover:opacity-70 cursor-pointer">
                    <Bold size={16} />
                  </button>
                  <button className="hover:opacity-70 cursor-pointer">
                    <Italic size={16} />
                  </button>
                  <button className="hover:opacity-70 cursor-pointer">
                    <Underline size={16} />
                  </button>
                  <button className="hover:opacity-70 cursor-pointer">
                    <List size={16} />
                  </button>
                </div>

                {/* Textarea */}
                <textarea
                  className="w-full h-40 p-3 resize-none focus:outline-none opacity-90"
                  placeholder="Nhập kĩ năng của bạn..."
                  maxLength={2500}
                />
              </div>

              {/* Character count */}
              <div className="text-right text-sm text-gray-500 mt-1">
                0/2500 ký tự
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
