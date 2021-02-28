import React from "react";
import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LabeledInput } from "molecules/labeled-input";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProperties {
  onSubmit: (values: LoginFormData) => void;
}

const LoginForm: React.FC<LoginFormProperties> = (props) => {
  const initialValues: LoginFormData = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: LoginFormData,
      ) => {
        props.onSubmit(values);
      }}
    >
      <Form>
        <Container>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <LabeledInput
                htmlId="email"
                inputType="email"
                label="Email Address"
                placeholderText="Enter your email"
              />
            </Col>
            <Col>
              <LabeledInput
                htmlId="password"
                inputType="password"
                label="Password"
                placeholderText="Enter your password"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit">Login</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Formik>
  );
};

export default LoginForm;
