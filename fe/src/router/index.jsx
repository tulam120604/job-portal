import { Route, Routes } from "react-router";
import Layout_client from "../layouts/client";
import Layout_dashboard from "../layouts/dashboard";
import Home_page from "../pages/client/home";
import Job_page from "../pages/client/job";
import Login from "../pages/auth/auth.login";
import Register from "../pages/auth/auth.register";
import SaveJobsPage from "../pages/client/saveJobs";

const Router = () => {
  return (
    <>
      <Routes>
        {/* client */}
        <Route path="/" element={<Layout_client />}>
          <Route index element={<Home_page />} />
          <Route path="/job" element={<Job_page />} />
          <Route path="/savejob" element={<SaveJobsPage />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* dashboard */}
        <Route path="/dashboard" element={<Layout_dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
