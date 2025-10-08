import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export default function ApplyJobModal(  {onClose}) {
  const [selectedCV, setSelectedCV] = useState("latest");
  const [coverLetter, setCoverLetter] = useState("");
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose)

  const handleSubmit = () => {
    alert("Hồ sơ đã được nộp!");
  };

  return (
    <div className="fixed inset-0 bg-black/50 grid place-content-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-xl w-full max-w-lg p-6 shadow-lg 
      overflow-y-auto max-h-[80vh] scrollbar-hide sideDown" 
      ref={modalRef}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Ứng tuyển{" "}
            <span className="text-green-600 dark:text-green-400">
              Designer Intern
            </span>
          </h2>
          <button type='button' className="text-slate-500 hover:text-red-500 text-lg font-bold cursor-pointer"
          onClick={onClose}>
            ×
          </button>
        </div>

        {/* CV chọn */}
        <div className="mb-6">
          <h3 className="font-medium text-slate-700 dark:text-slate-200 mb-2">
            Chọn CV để ứng tuyển
          </h3>

          {/* CV gần nhất */}
          <label
            className={`block border rounded-lg p-3 cursor-pointer ${
              selectedCV === "latest"
                ? "border-green-500 bg-green-50 dark:bg-green-900/30"
                : "border-slate-300 dark:border-slate-700"
            }`}
          >
            <input
              type="radio"
              name="cv"
              value="latest"
              checked={selectedCV === "latest"}
              onChange={() => setSelectedCV("latest")}
              className="mr-2 accent-green-600"
            />
            <span className="font-medium text-green-600 dark:text-green-400">
              CV ứng tuyển gần nhất:
            </span>{" "}
            <a href="#" className="text-green-600 hover:underline">
              CV-Cao-Tu-Lam.pdf
            </a>
            <button className="ml-3 text-sm text-green-600 hover:underline">
              Xem
            </button>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <p>Họ và tên: <strong>Cao Tú Lâm</strong></p>
              <p>Email: <strong>tulam1206044@gmail.com</strong></p>
              <p>Số điện thoại: <strong>0912389672</strong></p>
            </div>
          </label>

          {/* Chọn CV khác */}
          <label
            className={`block border rounded-lg p-3 cursor-pointer mt-3 dark:text-gray-300 ${
              selectedCV === "library"
                ? "border-green-500 bg-green-50 dark:bg-green-900/30"
                : "border-slate-300 dark:border-slate-700"
            }`}
          >
            <input
              type="radio"
              name="cv"
              value="library"
              checked={selectedCV === "library"}
              onChange={() => setSelectedCV("library")}
              className="mr-2 accent-green-600"
            />
            Chọn CV khác trong thư viện của tôi
          </label>

          {/* Upload CV */}
          <div className="mt-3 border border-dashed rounded-lg p-4 text-center text-slate-500 dark:text-slate-300">
            <p>
              📎 <strong>Tải lên CV từ máy tính</strong>, chọn hoặc kéo thả
            </p>
            <p className="text-sm mt-1">
              Hỗ trợ định dạng .doc, .docx, .pdf (≤ 5MB)
            </p>
            <button className="mt-3 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 
            rounded-md font-medium cursor-pointer">
              Chọn CV
            </button>
          </div>
        </div>

        {/* Thư giới thiệu */}
        <div className="mb-6">
          <h3 className="font-medium text-slate-700 dark:text-slate-200 mb-1">
            Thư giới thiệu:
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu, mong
            muốn...) giúp bạn gây ấn tượng với nhà tuyển dụng.
          </p>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Viết thư giới thiệu của bạn..."
            className="w-full border rounded-lg p-3 min-h-[100px] resize-none focus:ring-2 focus:ring-green-500 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 *:cursor-pointer">
          <button type='button' onClick={onClose}
          className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100">
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium"
          >
            Nộp hồ sơ ứng tuyển
          </button>
        </div>
      </div>
    </div>
  );
}
