import { Outlet } from "react-router";
import Header_client from "../components/header";

const Layout_client = () => {
  return (
    <>
      <Header_client />
      <>
        <Outlet />
      </>
    </>
  );
};

export default Layout_client;
