export default function JobActionButtons() {
  return (
    <div className="flex gap-3 mt-6 *:cursor-pointer">
      {/* Nút chính */}
      <button className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
        Ứng tuyển lại
      </button>

      {/* Nút phụ */}
      <button className="px-5 py-2 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-900 transition">
        Nhắn tin
      </button>
    </div>
  );
}
