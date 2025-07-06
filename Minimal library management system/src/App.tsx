import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Navbar></Navbar>
      <div className="mt-20 ">
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}

export default App;
