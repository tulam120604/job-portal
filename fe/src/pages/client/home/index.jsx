import Banner from "./banner";
import FilterBar from "./filterbar";
import Jobs from "./jobs";
import Suggestjob from "./suggest.job";
import Topjob from "./top.job";

const Home_page = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <Banner/>
    <FilterBar/>
    <Jobs/>
    <Suggestjob/>
    <Topjob/>
    </div>
  );
};

export default Home_page;