import Boxjob from "../../../components/box.job";

const Suggestjob = () => {
  return (
    <div className="space-y-2 rounded-lg p-6 bg-slate-50 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-slate-800 dark:text-gray-200">
        Gợi ý việc làm phù hợp
      </h2>
      <div className="*:dark:border-slate-700 *:border-slate-300 *:p-2 grid gap-y-4 *:rounded-lg">
        {Array.from({ length: 10 }).map(() => (
          <Boxjob />
        ))}
      </div>
    </div>
  );
};

export default Suggestjob;
