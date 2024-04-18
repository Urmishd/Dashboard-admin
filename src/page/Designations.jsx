import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';


function Designations() {
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
          <div className="d-flex">
            <div className="mt-4">
              <h3>Designations</h3>
              <span>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Dashboard
                </NavLink>{" "}
              </span>
              <span>/</span>
              <span className="text-muted"> Designations</span>
            </div>

            <div className="col-auto  ms-auto mt-4">
              <button
                className="btn btn-success rounded-xl"
                data-toggle="modal" data-target="#exampleModal"
                onClick={handleShow}
              >
                <i className="fa fa-plus"></i> Add Designations
              </button>
            </div>
          </div>

{/* model */}

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





          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody style={{ lineHeight: "30px" }}>
                {designations.map((designation) => (
                  <tr key={designation.id}>
                    <td>{designation.id}</td>
                    <td>{designation.designation}</td>
                    <td>{designation.department}</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <HiDotsVertical className="fs-5" />
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_designation"
                          >
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_designation"
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
            <p className="mt-3">Showing 1 to 10 of 15 entries</p>
        
          </div>
        </div>
      </div>
                
    </>
  );
}
export default Designations;

const designations = [
  {
    id: 1,
    designation: "Web Designer",
    department: "Web Development",
  },
  {
    id: 2,
    designation: "Web Developer",
    department: "Web Development",
  },
  {
    id: 3,
    designation: "Android Developer",
    department: "Application Development",
  },
  {
    id: 4,
    designation: "IOS Developer",
    department: "Application Development",
  },
  {
    id: 5,
    designation: "UI Designer",
    department: "Application Development",
  },
  {
    id: 6,
    designation: "UX Designer",
    department: "Application Development",
  },
  {
    id: 7,
    designation: "IT Technician",
    department: "Application Development",
  },
  {
    id: 8,
    designation: "Product Manager",
    department: "Application Development",
  },
  {
    id: 9,
    designation: "SEO Analyst",
    department: "Application Development",
  },
  {
    id: 10,
    designation: "Front End Designer",
    department: "Application Development",
  },
];
