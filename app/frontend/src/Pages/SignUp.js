import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  FloatingLabel,
  Image,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import apiEndpoints from "../Components/ApiEndpoints";
import * as yup from "yup";
import differenceInYears from "date-fns/differenceInYears";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  password: "",
  gender: "",
  repeatPassword: "",
  role: "",
  tnc: false,
};

const univeristyEmails = ['hs-fulda.de', 'ai.hs-fulda.de', 'informatik.hs-fulda.de'];

let schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required"),
  lastName: yup
    .string()
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter valid email address")
    .required("Email is required"),
  dateOfBirth: yup
    .date()
    .required("Date of birth is required")
    .test("dateOfBirth", "Should be greater than 18", function (value) { return differenceInYears(new Date(), new Date(value)) >= 18; }),
  password: yup
    .string()
    .min(5, "Too short")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .required("Repeate password is required")
    .oneOf([yup.ref("password")], "Password must match"),
  gender: yup
    .string()
    .required("Gender is required"),
  role: yup
    .string()
    .required("Role is required"),
  tnc: yup
    .boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const SignUp = () => {
  let navigate = useNavigate();
  return (
    <>
      <Container className="mt-6">
        <Row>
          <Col lg={4} md={6} sm={12} className="m-auto">
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
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                let split = values.email.split('@');

                if (!univeristyEmails.includes(split[1].toLowerCase())) {
                  alert("Please use Fulda University email.")
                  return true
                }
                const response = await apiEndpoints.register(values);
                console.log(response)
                if (response.data.message === "User Already Exists") {
                  alert(response.data.message)
                } else {
                  navigate("/login")
                }
              }}
            >
              {(props) => (
                <Form noValidate onSubmit={props.handleSubmit}>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFirstName"
                    >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={props.values.firstName}
                        onChange={props.handleChange}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.firstName}
                      </p>
                      <Form.Control.Feedback>
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationLastName"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={props.values.lastName}
                        onChange={props.handleChange}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.lastName}
                      </p>

                      <Form.Control.Feedback>
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="E-mail"
                        required
                        name="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.email}
                      </p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationDateOfBirth"
                    >
                      <Form.Label>
                        Date of Birth
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="date"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="dateOfBirth"
                          value={
                            props.values.dateOfBirth
                          }
                          onChange={
                            props.handleChange
                          }
                        />
                      </InputGroup>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.dateOfBirth}
                      </p>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="password"
                          value={
                            props.values.password
                          }
                          onChange={
                            props.handleChange
                          }
                        />
                      </InputGroup>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.password}
                      </p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationRepeatPassword"
                    >
                      <Form.Label>
                        Repeat Password
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="repeatPassword"
                          value={
                            props.values
                              .repeatPassword
                          }
                          onChange={
                            props.handleChange
                          }
                        />

                      </InputGroup>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {
                          props.errors
                            ?.repeatPassword
                        }
                      </p>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationGender"
                    >
                      <FloatingLabel
                        controlId="gender"
                        label="Select gender"
                        required
                      >
                        <Form.Select
                          name="gender"
                          value={props.values.gender}
                          onChange={
                            props.handleChange
                          }
                          style={{ margin: '0' }}
                        >
                          <option value="none">
                            Please select here
                          </option>
                          <option value="0">
                            Male
                          </option>
                          <option value="1">
                            Female
                          </option>
                          <option value="2">
                            Diverse
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.gender}
                      </p>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label
                        as="legend"
                        column
                        sm={2}
                      >
                        Role
                      </Form.Label>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <label>
                          <Field
                            type="radio"
                            name="role"
                            value="student"
                          />
                          {" "}Student
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="role"
                            value="tutor"
                          />
                          {" "}Tutor
                        </label>
                      </div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                        }}
                      >
                        {props.errors?.role}
                      </p>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <label>
                      <Field type="checkbox" name="tnc" />
                      {" "}Agree to terms and conditions
                    </label>
                  </Form.Group>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "red",
                    }}
                  >
                    {props.errors?.tnc}
                  </p>
                  <Button
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Sign Up
                  </Button>

                  <br />
                  <br />
                  <Button
                    variant="outline-primary"
                    type="submit"
                    style={{
                      width: "100%",
                      minheight: "70px",
                    }}
                    as={Link}
                    to={"/login"}
                  >
                    Already have an account? Sign in.
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
