import React from "react";
import "./Admin.css";
import { NavLink, Routes, Route } from "react-router-dom";
import CreateJob from "./createJob/CreateJob";
import AdminLogin from "./createAdmin/AdminLogin";
import Vacancy from "./alljobs/VacancyCard";
import AllAdmins from "./AllAdmins/AllAdmins";
import Dashboard from "./Dashboard/Dashboard";
import { FiLogIn } from "react-icons/fi";
import svg from './logout.svg'
import { FaHome } from "react-icons/fa";
function Admin() {
 let ism = JSON.parse(localStorage.getItem('auth'))?.name
console.log(ism);
  return (
    <div className="admin">
      <header className="admin_header">
          <NavLink title="home" to={"/"}>
            <FaHome className="home" />
          </NavLink>
        <div className="navLinks">
          <NavLink className="navigation" to={"/admin"}>
            Dashboard
          </NavLink>
          <NavLink className="navigation" to={"/admin/create-job"}>
            Create Job
          </NavLink>
          <NavLink className="navigation" to={"/admin/create-admin"}>
            Create Admin
          </NavLink>
          <NavLink className="navigation" to={"/admin/alljobs"}>
            All Jobs
          </NavLink>
          <NavLink className="navigation" to={"/admin/all-admins"}>
            All Admins
          </NavLink>
        </div>
        <div className="loginLogout">
          <NavLink className='logout' title="log out" to={"/login"}>
            <img src={svg} alt='logout'
              onClick={() =>
                window.confirm("Do you really want to log out?") &&
                localStorage.removeItem("auth")
              }
            />
          </NavLink>
          <span className="adminName" title={ism}>
            {ism[0]}
          </span>
        </div>
      </header>

      <div className="admin_body">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/create-admin" element={<AdminLogin />} />
          <Route path="/alljobs" element={<Vacancy />} />
          <Route path="/all-admins" element={<AllAdmins />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
