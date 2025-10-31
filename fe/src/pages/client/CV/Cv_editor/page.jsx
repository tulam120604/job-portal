import Header_client from "../../../../components/header";
import CvEditorSidebar from "../components/cv.editorSidebar";
import CVEditor from "./cv.editor";
import Preview from "./cv.preview";

const CvEditor_page = () => {
  return (
    <div className="pb-4">
      <Header_client />
      <div className="w-full sticky top-[65px] z-[1000] bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 
      flex justify-end pr-4">
        <Preview/>
      </div>
      <div className="flex flex-col xl:flex-row mt-5 top-22 min-h-[80vh]">
        <CvEditorSidebar />
        <div className="flex mx-auto ">
          {/* <CVBuilder /> */}
          <CVEditor />  
        </div>
      </div>
    </div>
  );
};

export default CvEditor_page;
