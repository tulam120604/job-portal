import { Outlet } from "react-router";
import Header_client from "../components/header";
import Footer_client from "../components/footer";

const Layout_client = () => {
  return (
    <>
      <Header_client />
      <>
        <Outlet />
      </>
      <Footer_client />
    </>
  );
};

export default Layout_client;
