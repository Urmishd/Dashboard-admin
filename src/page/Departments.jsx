import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Admindashboard from "./Admindashboard";
import { HiDotsVertical } from "react-icons/hi";
import { Modal, Button, Form } from 'react-bootstrap';

function Departments() {
  const departments = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Application Development" },
    { id: 3, name: "IT Management" },
    { id: 4, name: "Accounts Management" },
    { id: 5, name: "Support Management" },
    { id: 6, name: "Marketing" },
  ];
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {

    console.log("Username:", username);
    console.log("Password:", password);
    handleClose();
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4">
            <h3>Department</h3>
            <span>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Dashboard
              </NavLink>{" "}
            </span> 
            <span>/</span>
            <span className="text-muted"> Department</span>

            <div className="col-auto float-end ms-auto">
              <button
                className="btn btn-success rounded-xl"
                data-bs-toggle="modal"
                data-bs-target="#add_department"
                onClick={handleShow}
              >
                <i className="fa fa-plus"></i> Add Department
              </button>
            </div>
{/* Model */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Designation Name *</Form.Label>
              <Form.Control 
              className="p-2"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Department * </Form.Label>
              <Form.Control  
              className="p-2"
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


            
            {/* Show  entries */}

            <div className="mt-4 d-flex align-items-center gap-2
            ">
                <h6 className="mt-1">Show</h6>
                <select  style={{width:"50px",border:"none",backgroundColor:"transparent"}}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>10</option>
                </select>
                <h6 className="mt-1">entries</h6>
            </div>
            {/* Department table */}

            <table className="table table-striped custom-table mb-0 datatable ">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Department Name</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody style={{lineHeight:"45px"}}>
                {departments.map((department, index) => (
                  <tr key={department.id}>
                    <td>{index + 1}</td>
                    <td>{department.name}</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        
                      <HiDotsVertical className="fs-5" />
                      
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_department"
                          >
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_department"
                          >
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         <p className="mt-3">Showing 1 to 6 of 6 entries</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departments;
