import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, passwordupdate] = useState("");
  const [gender, genderChange] = useState("");
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handlePassword = (event) => {
    passwordupdate(event.target.value);
  };

  const handleGender = (event) => {
    genderChange(event.target.value);
  };

  const procedRegistrations = (event) => {
    event.preventDefault();

    debugger;
    axios
      .post("http://localhost:8000/users", {
        name: name,
        email: email,
        phone: phone,
        password: password,
        gender: gender,
      })
      .then((result) => {
        console.log(result.data);
        alert("success done");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("server err");
      });
  };

  return (
    <div>
      <section className="main-outer-box">
        <div className="container ">
          <div className="row main-containers">
            <div className="col-lg-6 ">
              <div className="middle-box">
                <div className="heading-box text-center">
                  <h2 className="titles"> Sign Up</h2>
                </div>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={handleName}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your E-Mail"
                      value={email}
                      onChange={handleEmail}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="Enter Your Phone Number"
                      value={phone}
                      onChange={handlePhone}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <br></br>
                    <Form.Label>Male</Form.Label>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      name="gender"
                      value="male"
                      onChange={handleGender}
                    />
                    <Form.Label>Female</Form.Label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      name="gender"
                      value="female"
                      onChange={handleGender}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </Form.Group>

                  <div className="heading-box text-center">
                    <Button
                      className="btnlogin"
                      type="submit"
                      onClick={procedRegistrations}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
