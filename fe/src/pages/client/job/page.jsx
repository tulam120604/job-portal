import JobActionButtons from "./job.actionbtn";
import JobDetailCard from "./job.card";
import CompanyCard from "./job.companycard";
import JobDescription from "./job.description";
import JobGeneralInfo from "./job.general";
import JobInterest from "./job.interest";
import Relatedjob from "./job.related";
import JobRequirement from "./job.requirement";

const Job_page = () => {
  const tags = ["Chuyên môn Frontend Developer", "IT - Phần mềm"];

  return (
    <div className="max-w-6xl mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company info: 1 phần */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow md:col-span-2">
          <JobDetailCard />
        </div>

        {/* Job detail: 2 phần */}
        <div className="bg-white dark:bg-slate-900 relative rounded-lg shadow">
          <CompanyCard />
        </div>
      </div>

      {/* description & requirement */}
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 mt-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-green-600">
            Chi tiết tin tuyển dụng
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        <JobDescription />
        <JobRequirement />
        <JobInterest />
        <JobActionButtons />
        <JobGeneralInfo />
      </div>

      {/* related job */}
      <Relatedjob/>
    </div>
  );
};

export default Job_page;
