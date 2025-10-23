import Suggestjob from "../saveJobs/job.suggest";
import AppliedJobCard from "./job.history";

const HistoryJobsPage = () => {

  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* SavedJobs */}
      <div className="md:col-span-2">
        <AppliedJobCard />
      </div>

      {/* suggest job */}
      <div>
        <Suggestjob />
      </div>
    </div>
  );
};

export default HistoryJobsPage;
