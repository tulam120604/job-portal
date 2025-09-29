import { Heart } from "lucide-react";
import { Link } from "react-router";

const BoxDetailjob = () => {
  return (
    <Link
      to={"/job"}
      className="text-slate-700 dark:text-slate-300 space-y-4 border 
    border-transparent hover:border-[#00A63E] duration-150 cursor-pointer"
    >
      {/* row 1 */}
      <div className="flex gap-x-4 items-start">
        {/* image */}
        <img src="..." alt="..." className="w-20 h-20 border rounded" />
        {/* name & company */}
        <div className="flex flex-col">
          <strong className="line-clamp-2">Name job</strong>
          <span className="line-clamp-1 font-medium text-green-600">10 - 20 triệu</span>
          <span className="line-clamp-1">Comany</span>
        </div>
      </div>

      {/* row 2 */}
      <div className="flex items-center justify-between">
        {/* location & date apply & date update */}
        <div className="flex items-center gap-x-2 *:px-1.5 *:py-1 *:bg-[#EDEFF0] *:dark:bg-[#3a3a3b] *:rounded text-xs">
          <button>Hà nội</button>
          <button>Còn 13 ngày ứng tuyển</button>
          <button>Cập nhật 2 ngày trước</button>
        </div>

        {/* apply & favorites */}
        <div className="flex items-center gap-x-2 *:cursor-pointer">
          <button className="px-2 py-1 text-sm bg-green-600 rounded">
            Ứng tuyển
          </button>
          {/*  */}
          <button className="p-1 border border-[#00A63E] rounded-full">
            <Heart width={16} height={16} color="#00A63E" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BoxDetailjob;
