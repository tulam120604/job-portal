import { Link } from "react-router";

export default function SavedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Thực Tập Sinh Lập Trình",
      company: "FPT IS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_logo_2010.svg",
      savedAt: "03/10/2025 - 20:31",
      salary: "Thỏa thuận",
      location: "Hà Nội",
      updated: "Cập nhật 1 ngày trước",
    },
  ];

  return (
    <section>
      {/* Banner */}
      <div className="bg-green-600 text-white p-6 rounded-t-lg">
        <h2 className="text-2xl font-semibold">Việc làm đã lưu</h2>
        <p className="mt-1 text-sm">
          Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để
          không bỏ lỡ cơ hội nghề nghiệp dành cho bạn.
        </p>
      </div>

      {/* Job List */}
      <div className="bg-white dark:bg-slate-900 rounded-b-lg shadow p-4">
        <p className="mb-4 text-slate-600 dark:text-slate-300">
          Danh sách {jobs.length} việc làm đã lưu
        </p>

        {jobs?.map((job) => (
          <Link to={'/job'}
            key={job.id}
            className="flex items-center justify-between border dark:border-slate-700 
            border-slate-300 rounded-lg p-4 mb-4 cursor-pointer hover:border-green-500
            duration-150"
          >
            {/* Left */}
            <div className="flex items-start gap-4">
              <img
                src={job.logo}
                alt={job.company}
                className="w-[100px] h-[100px] object-contain rounded border"
              />
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-1 text-slate-800 dark:text-slate-100">
                  {job.title}
                  <span className="text-green-500">✔</span>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {job.company}
                </p>
                <p className="text-xs text-slate-400">
                  Đã lưu: {job.savedAt}
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-slate-600 dark:text-slate-300">
                    {job.location}
                  </span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-slate-600 dark:text-slate-300">
                    {job.updated}
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-green-600 text-sm">{job.salary}</span>
              <div className="flex gap-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
                  Ứng tuyển
                </button>
                <button className="border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 px-4 py-1 rounded flex items-center gap-1">
                  🗑 Bỏ lưu
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
