import BoxDetailjob from "../../../components/box.detailjob";

const Relatedjob = () => {
  return (
    <div className="mt-5 space-y-4">
      <h2 className="text-lg font-semibold text-green-600">
        Gợi ý việc làm liên quan
      </h2>
      <div
        className="*:bg-slate-50 *:dark:bg-slate-900 grid grid-cols-1 
        md:grid-cols-2 gap-4 *:rounded-lg *:p-4"
      >
        {Array.from({ length: 10 }).map(() => (
          <BoxDetailjob />
        ))}
      </div>
    </div>
  );
};

export default Relatedjob;
