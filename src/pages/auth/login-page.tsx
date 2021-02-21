import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase-init";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "AuthProvider";
import { siteMap } from "sitemap";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface LoginData {
    email: string;
    password: string;
}
const Login = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const handleClick = () => history.push(siteMap.auth.signup);

    const handleSubmit = (values: LoginData) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                authContext.setUser(res);
                history.push(siteMap.root);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(
                        values: LoginData,
                        { setSubmitting }: FormikHelpers<LoginData>
                    ) => {
                        handleSubmit(values);
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
                            <Row>
                                <Col>
                                    <p>Not logged in yet?</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={handleClick}>SignUp</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Formik>
            </Row>
        </Container>
    );
};

export default Login;