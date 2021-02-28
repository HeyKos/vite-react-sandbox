import React from "react";
import firebase from "firebase-init";
import "firebase/firestore";
import "./main-navigation.scss";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export interface MainNavigationProperties {
    user?: firebase.User;
}

const COMPONENT_CLASS = "c-main-navigation";

export const MainNavigation: React.FC<MainNavigationProperties> = (
    props: MainNavigationProperties
) => {
    const history = useHistory();
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/auth/login");
            });
    };
    return (
        <Navbar
            className={`${COMPONENT_CLASS} d-flex`}
            bg="light"
            expand="lg"
            variant="light"
            sticky="top">
            <Navbar.Brand href="/" className="p-2">
                <Image
                    src="/src/assets/images/splash_image.png"
                    alt="Train beers logo"
                />
                <span>Train Beers</span>
            </Navbar.Brand>
            <div className="ml-auto">
                {props.user != null && (
                    <>
                        <span>{`Welcome ${props.user.email}`}</span>
                        <Button size="sm" onClick={handleClick}>
                            Logout
                        </Button>
                    </>
                )}
                {props.user == null && <span>Login</span>}
            </div>
        </Navbar>
    );
};

export default MainNavigation;
