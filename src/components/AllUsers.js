import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AllUsers = () => {
  const [data, setdata] = useState([]);
  const [searchvalue, setValue] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("data", data);

  const handleSearch = async (event) => {
    event.preventDefault();
    return await axios
      .get(`http://localhost:8000/users?q=${searchvalue}`)
      .then((response) => {
        setdata(response.data);
        setValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReset = () => {
    loadUserData();
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
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 space-box">
            <div className="review-box">
              <h3> Search ,Filters , Sort Informations </h3>
            </div>
          </div>
          <div className="row space-box">
            <div className="col-lg-6">
              <Form onSubmit={handleSearch} className="input-group w-auto">
                <input
                  type="text"
                  placeholder="Search User Information "
                  value={searchvalue}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button color="dark">Search </Button>
                <Button
                  className="resetsss mx-2"
                  color="info"
                  onClick={() => handleReset()}
                >
                  Reset
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 space-box">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>Phone Number</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
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
  );
};

export default AllUsers;
