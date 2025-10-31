export default function Preview() {
  return (
    <div className="flex gap-x-2 items-center py-2 text-sm *:duration-150">
      <button className="px-2 py-1 rounded bg-green-500 cursor-pointer hover:bg-green-600">
        Xem trước
      </button>
      <button className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 cursor-pointer">
        Tải xuống CV
      </button>
    </div>
  );
}
