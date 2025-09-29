import { Heart } from "lucide-react";
import { Link } from "react-router";

const Boxjob = () => {
  return (
    <Link to={'/job'}
    className="text-slate-700 dark:text-slate-300 space-y-4 border 
    border-transparent hover:border-[#00A63E] duration-150 cursor-pointer">
      {/* row 1 */}
      <div className="flex gap-x-4 items-start">
        {/* image */}
        <img src="..." alt="..." className="w-20 h-20 border rounded" />
        {/* name & company */}
        <div className="flex flex-col">
          <strong className="line-clamp-2">Name job</strong>
          <span className="line-clamp-1">Comany</span>
        </div>
      </div>

      {/* row 2 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 *:px-1 *:py-0.5 *:bg-[#EDEFF0] *:dark:bg-[#3a3a3b] *:rounded-xl text-xs">
          {/* salary */}
          <span>1000k$</span>
          {/* location */}
          <span>Ha Noi</span>
        </div>

        {/* favorites */}
        <button className="p-1 border border-[#00A63E] rounded-full cursor-pointer">
          <Heart width={16} height={16} color="#00A63E" />
        </button>
      </div>
    </Link>
  );
};

export default Boxjob;
