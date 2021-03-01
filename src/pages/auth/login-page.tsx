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

const Login: React.FC = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const handleClick = () => history.push(siteMap.auth.signup);

    const handleSubmit = async (values: LoginData) => {
        const res = await firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .catch((error) => {
                console.log(error.message);
            });

        if (res == null) {
            return;
        }

        if (authContext && authContext.setUser) {
            authContext.setUser(res.user);
        }

        history.push(siteMap.root);
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
                            <p>Don&apos;t have an account yet?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={handleClick}>Sign Up</Button>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default Login;
