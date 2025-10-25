import Header_client from "../../../../components/header";
import CvEditorSidebar from "../components/cv.editorSidebar";
import CVBuilder from "./cv.builder";
import CVEditor from "./cv.editor";

const CvEditor_page = () => {
  return (
    <div>
      <Header_client />
      <div className="flex flex-col xl:flex-row my-5 sticky top-22 min-h-[80vh]">
        <CvEditorSidebar />
        <div className="flex mx-auto shadow-lg rounded-lg overflow-hidden">
          <CVBuilder />
          <CVEditor />
        </div>
      </div>
    </div>
  );
};

export default CvEditor_page;
