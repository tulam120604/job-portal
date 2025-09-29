import Boxjob from "../../../components/box.job";

const Jobs = () => {
  return <div className="*:bg-slate-50 *:dark:bg-slate-900 mt-5 
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 *:rounded-lg *:p-4">
    {
        Array.from({length : 10}).map(() => <Boxjob/>)
    }
  </div>;
};

export default Jobs;
