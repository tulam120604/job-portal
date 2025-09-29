import { Tag } from "lucide-react";

const Topjob = () => {
  return (
    <div className="mt-5 space-y-4">
      <h2 className="text-lg font-semibold text-green-600">
        Top ngành nghề nổi bật
      </h2>
      <div
        className="*:bg-slate-50 *:dark:bg-slate-900 grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 *:rounded-lg *:p-4"
      >
        {Array.from({ length: 10 }).map(() => (
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow hover:shadow-md p-6 flex flex-col items-center text-center transition">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mb-4">
              <Tag className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
              title
            </h3>
            <p className="text-sm text-green-600 mt-1">111 việc làm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topjob;
