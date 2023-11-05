import { Outlet } from "react-router-dom";
import Navbar from "../componenst/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../componenst/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
