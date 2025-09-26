import { Route, Routes } from "react-router";
import Layout_client from "../layouts/client";
import Layout_dashboard from "../layouts/dashboard";
import Home_page from "../pages/client/home";
import Job_page from "../pages/client/job";

const Router = () => {
  return (
    <>
      <Routes>
        {/* client */}
        <Route path="/" element={<Layout_client />}>
          <Route index element={<Home_page />} />
          <Route path="/job" element={<Job_page/>}/>
        </Route>

        {/* dashboard */}
        <Route path="/dashboard" element={<Layout_dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
