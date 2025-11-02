import { PlusCircle, ChevronDown } from "lucide-react";

export default function CVCompletionCard() {
  return (
    <div className="sticky top-20 bg-white dark:bg-gray-900 rounded-xl shadow-md 
    p-5 w-[250px] text-gray-700 dark:text-gray-300">
      {/* Title */}
      <h3 className="text-center">
        Độ hoàn thiện hồ sơ
      </h3>

      {/* Progress Circle */}
      <div className="flex flex-col items-center mt-3 mb-4">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#f3f4f6"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#f87171"
              strokeWidth="10"
              strokeDasharray="314"
              strokeDashoffset={314 * (1 - 0.1)} // 10%
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg">10%</span>
            <span className="opacity-70 text-sm">hoàn thành</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-5 bg-blue-500 text-white py-2 
      rounded-lg hover:bg-blue-600 transition cursor-pointer">
        Xem và Tải CV
      </button>
    </div>
  );
}
