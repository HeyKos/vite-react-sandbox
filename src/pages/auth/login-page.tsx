import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase-init";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "AuthProvider";
import { siteMap } from "sitemap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "molecules/login-form";

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
                <LoginForm onSubmit={handleSubmit} />
                <Container>
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
            </Row>
        </Container>
    );
};

export default Login;