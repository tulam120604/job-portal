import { Link } from "react-router";

export default function AppliedJobCard() {
  const jobs = [
    {
      title: "Front-End Developer Intern",
      company: "Công ty TNHH SETA international Việt Nam",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_logo_2010.svg", // thay bằng logo công ty bạn
      appliedAt: "29-09-2025 15:47",
      cvLink: "#",
      salary: "Thỏa thuận",
      status: "Hồ sơ chưa phù hợp (29-09-2025 16:07)",
    },
  ];

  return (
    <section>
      {/* Banner */}
      <div className="bg-green-600 text-white p-6 rounded-t-lg">
        <h2 className="text-2xl font-semibold">Việc làm đã ứng tuyển</h2>
        <p className="mt-1 text-sm">
          Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển
          ngay để không bỏ lỡ cơ hội nghề nghiệp dành cho bạn.
        </p>
      </div>

      {/* Job List */}
      <div className="bg-white dark:bg-slate-900 rounded-b-lg shadow p-4">
        <p className="mb-4 text-slate-600 dark:text-slate-300">
          Danh sách {jobs.length} việc làm đã lưu
        </p>

        {jobs?.map((job) => (
          <div className="border rounded-lg bg-white dark:bg-slate-900 shadow-sm p-4 flex justify-between items-start">
            {/* LEFT */}
            <div className="flex gap-4">
              {/* Logo */}
              <div className="w-[100px] h-[100px] flex items-center justify-center border rounded">
                <img
                  src={job.logo}
                  alt="logo"
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                  {job.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {job.company}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Thời gian ứng tuyển: {job.appliedAt}
                </p>
                <p className="text-sm text-slate-500">
                  CV đã ứng tuyển:{" "}
                  <a
                    href={job.cvLink}
                    className="text-green-600 hover:underline"
                  >
                    CV tải lên
                  </a>
                </p>

                <p className="text-sm text-slate-400 mt-2 italic">
                  {job.status}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-3">
              <span className="text-green-600 font-medium">{job.salary}</span>
              <button className="flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                👁 Xem CV
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
