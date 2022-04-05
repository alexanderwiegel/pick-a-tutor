import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  FloatingLabel,
  Image
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from 'yup';
import apiEndpoints from "../Components/ApiEndpoints";
import jwt_decode from 'jwt-decode';
import apiEndPoints from "../Components/ApiEndpoints";

const initialValues = {
  email: "",
  password: ""
};

let schema = yup.object().shape({
  email: yup.string().email("Enter valid email address").required("Email is required"),
  password: yup.string().min(5, "Too short").required("Password is required")
});

export default function Login() {

  const tokenDecode = (token) => {
    var decoded = jwt_decode(token);
    if (decoded.isAdmin) {
      localStorage.setItem('statusCode', 'Admin')
      navigate("/approvals")
    }
    else if (decoded.isStudent) {
      localStorage.setItem('statusCode', 'Student')
      navigate("/home")
    }
    else {
      localStorage.setItem('statusCode', 'Tutor')
      navigate(`/tutor/${decoded.id}`);
    }

    localStorage.setItem('userID', decoded.id)
  }

  let navigate = useNavigate();

  return (
    <>
      <Container className="mt-6">
        <Row>
          <Col
            lg={4}
            md={6}
            sm={12}
            className="m-auto"
          >
            <div className="d-flex justify-content-center">
              <a href={"/"}>
                <Image
                  src={require("../images/logos/Tutor.png")}
                  style={{
                    height: 200,
                    width: 200,
                    margin: "10% 0 10% 0"
                  }}
                />
              </a>
            </div>
            <h2 className="text-center">Sign in to Pick-A-Tutor</h2>
            <br />
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                apiEndpoints.login(values).then(data => {
                  if (data.data.success) {
                    localStorage.clear()
                    localStorage.setItem('user', true)
                    localStorage.setItem('token', data.data.data.token)
                    tokenDecode(localStorage.getItem('token'))
                    apiEndPoints.setToken()
                  }
                  else {
                    alert(data.data.message)
                  }
                })
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"

                      name="email"
                      onChange={props.handleChange}
                      value={props.values.email}
                    />
                  </FloatingLabel>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {props.errors?.email}
                  </p>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                  >

                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={props.handleChange}
                      value={props.values.password}
                    />
                  </FloatingLabel>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {props.errors?.password}
                  </p>
                  <div className="d-flex justify-content-end"><a href="/forgotp">Forgot Password ?</a></div>
                  <br />


                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  // as={Link}
                  // to={"/"}
                  >
                    Sign In
                  </Button>
                </Form>

              )}
            </Formik>
            <br />
            <Button
              variant="outline-primary"
              type="submit"
              style={{ width: "100%", minheight: "50px" }}
              as={Link}
              to={"/signup"}
            >
              New to Pick-A-Tutor? Create an account.
            </Button>

          </Col>
        </Row>
      </Container>
    </>
  );
}
