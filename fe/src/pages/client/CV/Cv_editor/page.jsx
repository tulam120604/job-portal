import CVEditor from "./cv..editor";
import CVCompletionCard from "./cv.completioncard";

const CvEditor_page = () => {
  return (
    <div className="flex flex-col xl:flex-row top-20 min-h-[80vh] gap-x-4">
      {/* <CVBuilder /> */}
      <CVEditor />
      <div>
        <CVCompletionCard />
      </div>
    </div>
  );
};

export default CvEditor_page;
