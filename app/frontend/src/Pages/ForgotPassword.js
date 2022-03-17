import React from "react"
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  FloatingLabel,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from 'yup';

const initialValues = {
  email: "",
  password: "",
  repassword: ""
};

let schema = yup.object().shape({
  email: yup.string().email("Enter valid email address").required("Email is required"),
  password: yup.string().min(5, "Too short").required("Password is required"),
  repassword: yup.string().min(5, "Too short").required("Password is required").when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

const ForgotPassword = () => {
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
                    margin: "auto",
                  }}
                />
              </a>
            </div>
            <h2 className="text-center">Forgot Password?</h2>
            <br />
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                console.log("Submitted!")
                //do the on submit here
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
                    label="New Password"
                  >

                    <Form.Control
                      type="password"
                      placeholder="New Password"
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
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Retype New Password"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Retype New Password"
                      name="repassword"
                      onChange={props.handleChange}
                      value={props.values.repassword}
                    />
                  </FloatingLabel>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {props.errors?.repassword}
                  </p>
                  <br />


                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Reset Password
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
  )
}

export default ForgotPassword