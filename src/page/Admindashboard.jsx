import React from "react";
import Revenue from "./chart/Revenue";
import { FaRegUserCircle } from "react-icons/fa";


const Admindashboard = () => {

  return (
    <>
    
      <section className="bg-color-bg">
        <h2 className=" pt-3">Welcome </h2>
        <h6>Dashboard</h6>
        <div className="catgory mt-4">
          <div class="card dash-widget">
            <div class="card-body">
              <span class="dash-widget-icon">
                <i class="fa fa-cubes"></i>
              </span>
              <div class="dash-widget-info">
                <h3>112</h3>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div class="card dash-widget">
            <div class="card-body">
              <span class="dash-widget-icon">
                <i class="fa fa-usd"></i>
              </span>
              <div class="dash-widget-info">
                <h3>44</h3>
                <span>Clients</span>
              </div>
            </div>
          </div>

          <div class="card dash-widget">
            <div class="card-body">
              <span class="dash-widget-icon">
                <i class="fa fa-diamond"></i>
              </span>
              <div class="dash-widget-info">
                <h3>37</h3>
                <span>Task</span>
              </div>
            </div>
          </div>

          <div class="card dash-widget">
            <div class="card-body">
              <span class="dash-widget-icon">
                <i class="fa fa-user"></i>
              </span>
              <div class="dash-widget-info">
                <h3>218</h3>
                <span>Employees</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Revenue />
        </div>

        {/* New Employees Earnings Expenses Profit */}
        <div className="main-new mt-4">
          <div className="New">
            <div className="d-flex justify-content-between">
              <h6>New Employees</h6>
              <p className="text-success">+10%</p>
            </div>
            <h3>10</h3>
            <div className="line-one">
              <div className="line-two"></div>
            </div>
            <h5 className="mt-2">Overall Employees 218</h5>
          </div>

          <div className="New">
            <div className="d-flex justify-content-between">
              <h6>Earnings</h6>
              <p className="text-success">+12.5%</p>
            </div>
            <h3>$1,42,300</h3>
            <div className="line-one">
              <div className="line-two"></div>
            </div>
            <h5 className="mt-2">Previous Month $1,15,852</h5>
          </div>

          <div className="New">
            <div className="d-flex justify-content-between">
              <h6>Expenses</h6>
              <p className="text-success">-2.8%</p>
            </div>
            <h3>$8,500</h3>
            <div className="line-one">
              <div className="line-two"></div>
            </div>
            <h5 className="mt-2">Previous Month $7,500</h5>
          </div>

          <div className="New">
            <div className="d-flex justify-content-between">
              <h6>Profit</h6>
              <p className="text-success">-75%</p>
            </div>
            <h3>$1,12,000</h3>
            <div className="line-one">
              <div className="line-two"></div>
            </div>
            <h5 className="mt-2">Previous Month $1,42,000</h5>
          </div>
        </div>

        <div className="d-flex  gap-3">
          {/* Statistics */}
          <div className="bg-white main-stati mt-5 w-50">
            <h4>Statistics</h4>
            <div className=" d-flex flex-column gap-2 ">
              <div className="statistics-box">
                <div className="d-flex justify-content-between p-1 align-items-center">
                  <h6>Today Leave</h6>
                  <p>4/65</p>
                </div>
                <div className="sta-line">
                  <div className="sta-sub-line"></div>
                </div>
              </div>
              <div className="statistics-box">
                <div className="d-flex justify-content-between p-1">
                  <h6>Today Leave</h6>
                  <p>4/65</p>
                </div>
                <div className="sta-line">
                  <div className="sta-sub-line"></div>
                </div>
              </div>
              <div className="statistics-box">
                <div className="d-flex justify-content-between p-1">
                  <h6>Today Leave</h6>
                  <p>4/65</p>
                </div>
                <div className="sta-line">
                  <div className="sta-sub-line"></div>
                </div>
              </div>
              <div className="statistics-box">
                <div className="d-flex justify-content-between p-1">
                  <h6>Today Leave</h6>
                  <p>4/65</p>
                </div>
                <div className="sta-line">
                  <div className="sta-sub-line"></div>
                </div>
              </div>
              <div className="statistics-box">
                <div className="d-flex justify-content-between p-1">
                  <h6>Today Leave</h6>
                  <p>4/65</p>
                </div>
                <div className="sta-line">
                  <div className="sta-sub-line"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Task Statistics */}

          <div className="bg-white main-stati mt-5 w-50">
            <h4>Task Statistics</h4>
            <div>
              <div className="d-flex">
                <div className=" border border-1 w-50 d-flex flex-column align-items-center">
                  <p>Total Tasks</p>
                  <h4>385</h4>
                </div>
                <div className=" border border-1 w-50 d-flex flex-column align-items-center">
                  <p>Overdue Tasks</p>
                  <h4>19</h4>
                </div>
              </div>

              <div className="taskline w-100">
                <div className="subtaskline">30%</div>
                <div className="subtaskline2">22%</div>
                <div className="subtaskline3">24%</div>
                <div className="subtaskline4">21%</div>
                <div className="subtaskline5">10%</div>
              </div>

              <div className="maintasks">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex align-items-center gap-2
                  "
                  >
                    <div className="circle">
                      <div className="dot"></div>
                    </div>
                    <p className="pt-3">Completed Tasks</p>
                  </div>
                  <p className="pt-3">166</p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex align-items-center gap-2
                  "
                  >
                    <div className="circle">
                      <div className="dot"></div>
                    </div>
                    <p className="pt-3">Inprogress Tasks</p>
                  </div>
                  <p className="pt-3">115</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex align-items-center gap-2
                  "
                  >
                    <div className="circle">
                      <div className="dot"></div>
                    </div>
                    <p className="pt-3">On Hold Tasks</p>
                  </div>
                  <p className="pt-3">31</p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex align-items-center gap-2
                  "
                  >
                    <div className="circle">
                      <div className="dot"></div>
                    </div>
                    <p className="pt-3">Pending Tasks</p>
                  </div>
                  <p className="pt-3">47</p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className="d-flex align-items-center gap-2
                  "
                  >
                    <div className="circle">
                      <div className="dot"></div>
                    </div>
                    <p className="pt-3">Review Tasks</p>
                  </div>
                  <p className="pt-3">5</p>
                </div>
              </div>
            </div>
          </div>
          {/* Today Absent  */}
          <div className="bg-white main-stati mt-5 w-50">
            <h5>Today Absent </h5>
            <span>5</span>
            <div className="border border-1 p-2 Absent">
              <div>
                <span className="user">
                  <FaRegUserCircle className="fs-2" />
                </span>
                <span>Martin Lewis</span>
              </div>
              <p>4 Sep 2019</p>
              <div className="d-flex justify-content-between p-1">
                <p>Leave Date</p>
                <div className="text-danger pending">Pending</div>
              </div>
            </div>

            <div className="border border-1 p-2 Absent">
              <div>
                <span className="user">
                  <FaRegUserCircle className="fs-2" />
                </span>
                <span>Martin Lewis</span>
              </div>
              <p>4 Sep 2019</p>
              <div className="d-flex justify-content-between p-1">
                <p>Leave Date</p>
                <div className="text-success pending">Approved</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h3>Invoices</h3>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Admindashboard;
