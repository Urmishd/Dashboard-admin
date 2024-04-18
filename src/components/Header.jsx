import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { FaRegComment, FaSearch } from "react-icons/fa";
import {FaAngleDown,} from "react-icons/fa";



const Header = () => {  

  // Sticky header

  const [isSticky, setIsSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      if (currentPosition > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <>
      {/* // <-------------------------------- header section start  -------------------------------------> */}
      <section className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="bg-navbar">
          <div className="containe-fluid">
            <div className="row">
              <div className="col-6 d-flex justify-content-evenly mt-1">
                <img src={Logo} alt="" className="h-50" />
                <div className="d-flex gap-3 mt-2">
                  <FaBarsStaggered
                    className="fs-3 text-light cursor-pointer"
                    // onClick={}
                  />
                  <h5 className="text-light">Dreamguy's Technologies</h5>
                  
                </div>
              </div>

              <div className="col-6 d-flex gap-3 justify-content-end align-items-center pb-5">
                <div className="position-relative">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="search"
                  />
                  <FaSearch className="search-icon" />
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="bg-transparent border-0 text-light"
                  >
                    <option value="">English</option>
                    <option value="">French</option>
                    <option value="">Germany</option>
                    <option value="">Spanish</option>
                  </select>
                </div>
                <div className="bell">2</div>
                <CiBellOn className="fs-2 text-light" />

                <div className="comm">8</div>
               <FaRegComment className="fs-4 text-light position-relative"/>

                <div className="profile">
                <div className="nofty"></div>
                </div>
                <div className="mt-3 position-relative">
                  <p className="text-light admin">
                    Admin <FaAngleDown />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
   
    </>
  );
};

export default Header;

// main data
// const mains = [
//   {
//     icon: <AiOutlineDashboard />,
//     title: "Dashboard",
//     content: (
//       <ul>
       
//           <li>Admin Dashboard</li>
  
   
//           <li>Employees Dashboard</li>
      
//       </ul>
//     ),
//   },
//   {
//     icon: <RiDashboard2Fill />,
//     title: "Apps",
//     content: (
//       <ul>
//         <li>Chat</li>
//         <li>Class</li>
//         <li>Calender</li>
//         <li>Contacts</li>
//         <li>Email</li>
//         <li>FIle Maager</li>
//       </ul>
//     ),
//   },
// ];

//  employees data
// const employees = [
//   {
//     icon: <LuUser2 />,
//     title: "Employees",
//     content: (
//       <ul>
//         <li>All Employees</li>
//         <li>Holidays</li>
//         <li>Leaves(Admin)</li>
//         <li>Leaves(Employee)</li>
//         <li>Leave Setting</li>
//         <li>Attendance(Admin)</li>
//         <li>Attendance(Employee)</li>
//         <li>Departmets</li>
//         <li>Designations</li>
//         <li>Timesheet</li>
//         <li>Shift & Schedual</li>
//         <li>Overtime</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaPeopleGroup />,
//     title: "Clients",
//     content: "",
//   },
//   {
//     icon: <SlRocket />,
//     title: "Project",
//     content: (
//       <ul>
//         <li>Projects</li>
//         <li>Task</li>
//         <li>Task Board</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <BsPersonWorkspace />,
//     title: "Leads",
//     content: "",
//   },
//   {
//     icon: <BsTicket />,
//     title: "Tickets",
//     content: "",
//   },
// ];

// // HR data

// const hrs = [
//   {
//     icon: <RiCheckboxMultipleBlankLine />,
//     title: "Sales   ",
//     content: (
//       <ul>
//         <li>Estimates</li>
//         <li>Invices</li>
//         <li>Payments</li>
//         <li>Expenses</li>
//         <li>Provident Fund</li>
//         <li>Taxes</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <RiCheckboxMultipleBlankLine />,
//     title: "Accounting",
//     content: (
//       <ul>
//         <li>Catrgories</li>
//         <li>Bugdget</li>
//         <li>Bugdget Expenses</li>
//         <li>Bugdget Revcenuce</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaCcPaypal />,
//     title: "Payroll",
//     content: (
//       <ul>
//         <li>Employee salary</li>
//         <li>Payslip</li>
//         <li>Payroll items</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <BsPersonWorkspace />,
//     title: "Policies",
//     content: "",
//   },
//   {
//     icon: <BsTicket />,
//     title: "Reports",
//     content: (
//       <ul>
//         <li>Expense Report</li>
//         <li>Invoice Report</li>
//         <li>Paymet Report</li>
//         <li>Project Report</li>
//         <li>Task Report</li>
//         <li>User Report</li>
//         <li>Employee Report</li>
//         <li>payslip Report</li>
//       </ul>
//     ),
//   },
// ];

// // Performance data

// const Performances = [
//   {
//     icon: <FaGraduationCap />,
//     title: "Performances",
//     content: (
//       <ul>
//         <li>Performances Idicator</li>
//         <li>Performances Review</li>
//         <li>Performances Appraisal</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FiCrosshair />,
//     title: "Goals",
//     content: (
//       <ul>
//         <li>Goal List</li>
//         <li>Goal Type</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaRegEdit />,
//     title: "Training",
//     content: (
//       <ul>
//         <li>Training List</li>
//         <li>Trainers</li>
//         <li>Training Typs</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaBullhorn />,
//     title: "Promotion",
//     content: "",
//   },
//   {
//     icon: <FaExternalLinkSquareAlt />,
//     title: "Resignation",
//     content: "",
//   },
//   {
//     icon: <FaRegTimesCircle />,
//     title: "Termination",
//     content: "",
//   },
// ];

// // Administration data

// const Administrations = [
//   {
//     icon: <FaRegObjectUngroup />,
//     title: "Assets",
//     content: "",
//   },
//   {
//     icon: <GoBriefcase />,
//     title: "Jobs",
//     content: (
//       <ul>
//         <li>User Dashboard</li>
//         <li>Jobs Dashboard</li>
//         <li>Manage Jobs</li>
//         <li>Manage Resumes</li>
//         <li>Shortlist Cadidates</li>
//         <li>Interview Question</li>
//         <li>Offer Approvals</li>
//         <li>Experience Level</li>
//         <li>Candidates List</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaQuestion />,
//     title: "Knowledgebase",
//     content: "",
//   },
//   {
//     icon: <FaRegBell />,
//     title: "Activites",
//     content: "",
//   },
//   {
//     icon: <TbUserPlus />,
//     title: "Users",
//     content: "",
//   },
//   {
//     icon: <CiSettings />,
//     title: "Settings",
//     content: "",
//   },
// ];

// // Pages data

// const Pages = [
//   {
//     icon: <LuUser2 />,
//     title: "Profile",
//     content: (
//       <ul>
//         <li>Employee Profile</li>
//         <li>Client Profile</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaKey />,
//     title: "Authentication",
//     content: (
//       <ul>
//         <li>Login</li>
//         <li>Register</li>
//         <li>Forgot Paassword</li>
//         <li> OTP</li>
//         <li>Lock Screen</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <BsExclamationTriangle />,
//     title: "Error Pages",
//     content: (
//       <ul>
//         <li>404 Error</li>
//         <li>505 Error</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaHandPointUp />,
//     title: "Subscriptions",
//     content: (
//       <ul>
//         <li>Subscriptions(Admin)</li>
//         <li>Subscriptions(Company)</li>
//         <li>Subscriptions Companies</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FiColumns />,
//     title: "Pages",
//     content: (
//       <ul>
//         <li>Serach</li>
//         <li>FAQ</li>
//         <li>Terms</li>
//         <li>Privacy Policy</li>
//         <li>Blank Page</li>
//       </ul>
//     ),
//   },
// ];

// // Ui interface data

// const Uis = [
//   {
//     icon: <IoExtensionPuzzleOutline />,
//     title: "Components",
//     content: "",
//   },
//   {
//     icon: <FaKey />,
//     title: "Forms",
//     content: (
//       <ul>
//         <li>Basic Input</li>
//         <li>Input Group</li>
//         <li>Horizontal Form</li>
//         <li> Vertical Form</li>
//         <li>Form Mask</li>
//         <li>Form Validation</li>
//       </ul>
//     ),
//   },
//   {
//     icon: <FaTableCells />,
//     title: "Tables",
//     content: (
//       <ul>
//         <li>Basic Table</li>
//         <li>Data Table</li>
//       </ul>
//     ),
//   },
// ];

// const Extras = [
//   {
//     icon: <IoExtensionPuzzleOutline />,
//     title: "Documetation",
//     content: "",
//   },
//   {
//     icon: <FaKey />,
//     title: "Change Log",
//     content: "",
//   },
//   {
//     icon: <FaTableCells />,
//     title: "Multi Level",
//     content: (
//       <ul>
//         <li>Level 1</li>
//         <li>Level 2</li>
//       </ul>
//     ),
//   },
// ];
