import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Employeedashboard from "./page/Employeedashboard";
import Admindashboard from "./page/Admindashboard";
import Departments from "./page/Departments";
import Designations from "./page/Designations";
import Setting from "./components/other/Setting";

function App() {
  return (
    <>
      <Login />
      {/* <Header /> */}

      <Router>
        <div className="row w-100">
          <div className="col-2">
            <Siderbar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Admindashboard />} />
              <Route
                path="/employeedashboard"
                element={<Employeedashboard />}
              />
              <Route path="/departments" element={<Departments />} />
              <Route path="/designations" element={<Designations />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Setting  />
    </>
  );
}

export default App;
