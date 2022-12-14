import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footers/Footer";
import HeaderStats from "../components/Headers/HeaderStats";
import PageNotFound from "../components/PageNotFound/PageNotFound";

// screens
import Dashboard from "../screens/dashboard/Dashboard";
import StudentList from "../screens/students/StudentList";

// styles
import "../assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="relative md:ml-60 bg-slate-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Fragment>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<StudentList />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Fragment>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
