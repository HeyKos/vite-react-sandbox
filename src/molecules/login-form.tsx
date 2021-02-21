import React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface LoginFormData {
    email: string;
    password: string;
}

export interface LoginFormProperties {
    onSubmit: (values: LoginFormData) => void,
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
                { setSubmitting }: FormikHelpers<LoginFormData>
            ) => {
                props.onSubmit(values);
            }}
            >
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <Field class="form-control" id="email" name="email" type="email" placeholder="Enter your email" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                                <Field class="form-control" id="password" name="password" type="password" placeholder="Enter your Password" />
                            </div>
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