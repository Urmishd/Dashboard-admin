import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io"; 
import { LuUser2 } from "react-icons/lu";
import { PiUsersThreeLight } from "react-icons/pi"; 
import { IoRocketOutline } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa";
import { LiaTicketAltSolid } from "react-icons/lia";




function Siderbar() {
  // ------- Dashboard branch--------
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Apps --
  const [menuchat, setMenuchat] = useState(false);

  const togglechat = () => {
    setMenuchat(!menuchat);
  };

  // --------  master branch-------
  const [master, setmaster] = useState(false);

  const toggle2 = () => {
    setmaster(!master);
  };

  // --------- Employee branch -------
  const [Employee, setEmployee] = useState(false);

  const toggle3 = () => {
    setEmployee(!Employee);
  };

  const [Project, setProject] = useState(false);

  const toggle4 = () => {
    setProject(!Project);
  };

  return (
    <>
      <div className="">
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <nav className="greedys sidebar-horizantal">
                <ul className="list-inline-item list-unstyled links p-2">
                  <li className="menu-title">
                    <span>Main</span>
                  </li>
                  <li
                    className={`submenu ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                  >
                    <h6
                      className="d-flex align-items-center"
                      style={{ gap: "80px" }}
                    >
                      <div className="d-flex gap-2 align-item-center">
                        <AiOutlineDashboard />
                        <span className="cursorpointer"> Dashboard</span>
                      </div>
                      <div>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </h6>
                    <ul style={{ display: menuOpen ? "block" : "none" }}>
                      <li>
                        <Link to="/" className="sublist">
                          Admin Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/employeedashboard" className="sublist">
                          Employee Dashboard
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Apps menu */}
                  <li
                    className={`submenu ${menuchat ? "active" : ""}`}
                    onClick={togglechat}
                  >
                    <h6
                      className="d-flex align-items-center"
                      style={{ gap: "125px" }}
                    >
                      <div>
                        <i className="la la-dashboard"></i>
                        <span className="cursorpointer">
                          <IoCubeOutline /> Apps
                        </span>
                      </div>
                      <span>
                        <MdOutlineKeyboardArrowRight />
                      </span>
                    </h6>
                    <ul style={{ display: menuchat ? "block" : "none" }}>
                      <li>
                        <Link to="#" className="sublist">
                          Chat
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Calls
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Calender
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Contacts
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Email
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          File Manager
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* master branch */}
                  <li className="menu-title mt-3">
                    <span>Masters</span>
                  </li>
                  <li
                    className={`submenu ${master ? "active" : ""}`}
                    onClick={toggle2}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                      style={{ gap: "110px" }}
                    >
                      <div>
                        <span className="cursorpointer">
                          <IoIosGitBranch /> Master
                        </span>
                      </div>
                      <div>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </h6>
                    <ul style={{ display: master ? "block" : "none" }}>
                      <li>
                        <Link to="/departments" className="sublist">
                          Departments
                        </Link>
                      </li>
                      <li>
                        <Link to="/designations" className="sublist">
                          Designations
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Empolyees branch */}
                  <li className="menu-title mt-3">
                    <span>Employees</span>
                  </li>
                  {/* employee */}
                  <li
                    className={`submenu ${Employee ? "active" : ""}`}
                    onClick={toggle3}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                      style={{ gap: "80px" }}
                    >
                      <div>
                        <span className="cursorpointer">
                        <LuUser2 /> Employees
                        </span>
                      </div>
                      <div>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </h6>
                    <ul style={{ display: Employee ? "block" : "none" }}>
                      <li>
                        <Link to="#" className="sublist">
                          All Employees
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Holidays
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Leaves(Admin)
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Leaves Setting
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Attendance(Admin)
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Attendance(Employee)
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Departmant
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Desigantion
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Timesheet
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Overtime
                        </Link>
                      </li>
                    </ul>
                  </li>
                    {/* Client */}
                    <li
                    className={`submenu ${master ? "active" : ""}`}
                    onClick={toggle2}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                      style={{ gap: "80px" }}
                    >
                      <div>
                        <span className="cursorpointer">
                        <PiUsersThreeLight /> Clients
                        </span>
                      </div>
                    </h6>
                  
                  </li>
                  {/* project */}
                  <li
                    className={`submenu ${Project ? "active" : ""}`}
                    onClick={toggle4}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                      style={{ gap: "110px" }}
                    >
                      <div>
                        <span className="cursorpointer">
                        <IoRocketOutline /> Project
                        </span>
                      </div>
                      <div>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </h6>
                    <ul style={{ display: Project ? "block" : "none" }}>
                      <li>
                        <Link to="#" className="sublist">
                          Project
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Tasks
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="sublist">
                          Task Board
                        </Link>
                      </li>
                      
                     
                    </ul>
                  </li>
                  {/* leads */}
                  <li
                    className={`submenu ${master ? "active" : ""}`}
                    onClick={toggle2}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                      
                    >
                      <div>
                        <span className="cursorpointer">
                        <FaUserSecret /> Leads
                        </span>
                      </div>
                    </h6>
                  </li>
                  {/* tickets */}
                  
                  <li
                    className={`submenu ${master ? "active" : ""}`}
                    onClick={toggle2}
                  >
                    <h6
                      className="mt-2 d-flex align-items-center"
                    >
                      <div>
                        <span className="cursorpointer">
                        <LiaTicketAltSolid /> Tickets
                        </span>
                      </div>
                    </h6>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Siderbar;
