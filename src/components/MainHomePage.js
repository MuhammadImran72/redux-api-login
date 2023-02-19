import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../servcies/api";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

const MainHomePage = () => {
  const dispatches = useDispatch();
  const navigatess = useNavigate();
  const [users, setUsers] = useState([]);
  const homeGlobelState = useSelector((state) => state.homeGlobelState);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigatess("/");
    }
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Navbar className="backrang" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Johan Doy</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Button
                      id="logoutbtnss"
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                    >
                      Logout{" "}
                    </Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 space-box">
            <div className="notifications-box">
              <h3> Notifications</h3>
            </div>
            <div className="notification-body">
              <h6>Welcome</h6>
              <p>welcome</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 space-box">
            <div className="review-box">
              <h3> Review</h3>
            </div>
            <div className="notification-body">
              <h6>Welcome Reviews</h6>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 space-box">
            <div className="review-box">
              <h3> Display BD.Json Data</h3>
            </div>
            <div className="notification-body">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>E-Mail</th>
                    <th>Phone Number</th>
                    <th>gender</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-menu">
              Count : {homeGlobelState?.count}
              <Button
                onClick={() => {
                  dispatches({ type: "ADD", payload: 5 });
                }}
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
