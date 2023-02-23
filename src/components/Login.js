import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleApi } from "../reducers/loginReducr";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, passwordupdate] = useState("");
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const loginGlobelState = useSelector((state) => state.loginGlobelState);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    passwordupdate(event.target.value);
  };

  const procedLogin = (event) => {
    event.preventDefault();
    dispatch(handleApi({ email, password }));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      naviagte("/alluser");
    }
  }, [loginGlobelState.results]);
  return (
    <div>
      <section className="main-outer-box">
        <div className="container ">
          <div className="row main-containers">
            <div className="col-lg-6 ">
              <div className="middle-box">
                <div className="heading-box text-center">
                  <h2 className="titles"> Login</h2>
                </div>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your E-Mail"
                      value={email}
                      onChange={handleEmail}
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
                    <p>
                      Not registered yet?{" "}
                      <span>
                        <Link to={"/signup"}>Registration</Link>{" "}
                      </span>
                    </p>
                    <Button
                      className="btnlogin"
                      type="submit"
                      onClick={procedLogin}
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

export default Login;
