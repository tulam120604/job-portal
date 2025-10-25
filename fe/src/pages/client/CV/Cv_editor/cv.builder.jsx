
export default function CVBuilder() {
  return (
    <div
      className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-8 text-slate-800 dark:text-slate-100 max-w-3xl mx-auto border border-slate-200 dark:border-slate-800"
      style={{ borderTop: `6px solid` }}
    >
      {/* Thông tin cá nhân */}
      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Họ và tên
        </h1>
        <p className="text-slate-600 dark:text-slate-300">Vị trí ứng tuyển</p>
        <div className="mt-2 text-sm space-y-1">
          <p>{"personalInfo.email"}</p>
          <p>{"personalInfo.phone"}</p>
          <p>{"personalInfo.address"}</p>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-700 mb-6" />

      {/* Kinh nghiệm */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">
          Kinh nghiệm làm việc
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Vị trí công việc
            </h3>
            <p className="text-sm italic text-slate-600 dark:text-slate-400">
              Tên công ty Thời gian
            </p>
            <p className="text-sm mt-1">Mô tả công việc...</p>
          </div>
        </div>
      </section>

      {/* Học vấn */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Học vấn</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">Tên trường</h3>
            <p className="text-sm italic text-slate-600 dark:text-slate-400">
              Bằng cấp
            </p>
          </div>
        </div>
      </section>

      {/* Kỹ năng */}
      <section>
        <h2 className="text-lg font-semibold mb-3 border-b pb-1">Kỹ năng</h2>
        <div className="flex flex-wrap gap-2">
          <p className="text-slate-500 text-sm">Chưa có kỹ năng nào.</p>
        </div>
      </section>
    </div>
  );
}
