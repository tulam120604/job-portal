import Suggestjob from "./job.suggest";
import SavedJobs from "./save.jobs";

const SaveJobsPage = () => {
  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* SavedJobs */}
      <div className="md:col-span-2">
        <SavedJobs />
      </div>

      {/* suggest job */}
      <div className="">
        <Suggestjob />
      </div>
    </div>
  );
};

export default SaveJobsPage;
