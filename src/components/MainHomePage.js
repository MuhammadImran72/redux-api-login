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
import img from "../images/Piotr-Kubalka1a.jpg";
import imglogo from "../images/logo.jpg";
import axios from "axios";

import pdf from "../documents/taqi.pdf";

const MainHomePage = () => {
  const dispatches = useDispatch();
  const navigatess = useNavigate();
  const viewnavigate = useNavigate();
  const [value, setValue] = useState("");
  const [sortvalue, setSortValue] = useState("");
  const [users, setUsers] = useState([]);

  const sortoptions = ["name", "email", "phone", "gender"];

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

  const handleSearch = async (event) => {
    event.preventDefault();
    return await axios
      .get(`http://localhost:8000/users?q=${value}`)
      .then((response) => {
        setUsers(response.data);
        setValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const hanldeResetInfo = () => {
    getUsersDetails();
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get("http://localhost:8000/users?_sort=${value}&_order=asc")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const OpenView = () => {
    viewnavigate("/viewsign");
  };
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Navbar className="backrang" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#">
                    {" "}
                    <img alt="logo-image" src={imglogo} />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    >
                      <Nav.Link href="#action1">Johan Doy</Nav.Link>
                      <img alt="Picture" src={img} />
                    </Nav>

                    <Form className="d-flex">
                      <Button id="sign-in-active">Sign-in Active</Button>
                      <Button id="editprofile">Edite Profile</Button>
                      <Button id="changepassword">Change Password</Button>
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
      </section>

      <section id="banner-sec">
        <div className="container-fluid">
          <div className="row main-two-box">
            <div className="col-lg-6">
              <div className="inner-box">
                <h3>Announcements /</h3>
                <h3> Global Messages</h3>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="inner-box">
                <h3>Individual Messages</h3>
                <ol>
                  <li>Various versions have evolved over the years,</li>
                  <li>Various versions have evolved over the years,</li>
                  <li>Various versions have evolved over the years,</li>
                  <li>Various versions have evolved over the years,</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="row main-two-box">
            <div className="col-lg-6 text-center">
              <Button
                id="viewsss"
                onClick={() => {
                  OpenView();
                }}
              >
                {" "}
                View & Sign Declaration Certificate
              </Button>
            </div>

            <div className="col-lg-6 text-center">
              <a href={pdf} target="_blank">
                <Button id="privacy">
                  {" "}
                  View Privacy Policy, Terms of Use, User Agreement
                </Button>{" "}
              </a>
            </div>
          </div>

          <div className="row main-two-box">
            <div className="col-lg-6 m-auto ">
              <div className="view-inner-box">
                <div className="text-center">
                  <Button id="viewsss"> View Signed Documents</Button>
                </div>

                <div className="linksss">
                  <ol>
                    <li>Link to the Signed PDF File</li>
                    <li>Link to Billboard on Hedera</li>
                    <li>link to view Hash value for the signed document</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row main-two-box">
          <div className="col-lg-12">
            <div className="inner-box-user">
              <h2 className="text-center">Show Every Thing About User</h2>
              {users.map((user) => (
                <ul key={user.id}>
                  <li>{user.id}</li>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                  <li>{user.gender}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
