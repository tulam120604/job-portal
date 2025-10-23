import Header_client from "../../../../components/header";
import CvEditorSidebar from "../components/cv.editorSidebar";

const CvEditor_page = () => {
  return (
    <div>
      <Header_client />
      <div className="my-5 sticky top-22 min-h-[80vh]">
        <CvEditorSidebar />
      </div>
    </div>
  );
};

export default CvEditor_page;