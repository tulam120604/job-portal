import Footer_client from "@/components/footer";
import Header_client from "@/components/header";
import { Outlet } from "react-router";

const Layout_client = () => {
  return (
    <>
      <Header_client />
      <main className="w-[95vw] max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer_client />
    </>
  );
};

export default Layout_client;
