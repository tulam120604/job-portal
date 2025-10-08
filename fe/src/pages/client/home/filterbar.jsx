import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FilterBar() {
  const scrollRef = useRef(null);

  const locations = [
    "Hà Nội",
    "Ba Đình",
    "Hoàn Kiếm",
    "Hai Bà Trưng",
    "Đống Đa",
    "Tây Hồ",
    "Cầu Giấy",
    "Thanh Xuân",
    "Hoàng Mai",
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-4 px-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-green-600">Việc làm tốt nhất</h2>
        </div>

        <a href="#" className="text-sm text-green-600 hover:underline">
          Xem tất cả
        </a>
      </div>

      <div className="flex items-center gap-2">
        {/* Dropdown filter */}
        <select className="px-3 py-2 border rounded-lg text-sm dark:bg-slate-800 dark:border-slate-700">
          <option>Địa điểm</option>
          <option>Mức lương</option>
          <option>Ngành nghề</option>
        </select>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="p-2 border rounded-full text-green-600 hover:bg-green-50 
          dark:hover:bg-slate-800 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable tags */}
        <div
          ref={scrollRef}
          className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {locations.map((loc, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                idx === 0
                  ? "bg-green-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Scroll right */}
        <button
          onClick={() => scroll("right")}
          className="p-2 border rounded-full text-green-600 hover:bg-green-50 
          dark:hover:bg-slate-800 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
