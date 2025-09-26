import Banner from "./banner";
import FilterBar from "./filterbar";
import Jobs from "./jobs";
import Suggestjob from "./suggestjob";
import Topjob from "./topjob";

const Home_page = () => {
  return (
    <>
    <Banner/>
    <FilterBar/>
    <Jobs/>
    <Suggestjob/>
    <Topjob/>
    </>
  );
};

export default Home_page;