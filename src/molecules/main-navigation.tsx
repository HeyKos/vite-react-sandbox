import React from "react";
import firebase from "firebase-init";
import "firebase/firestore";
import "./main-navigation.scss";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export interface MainNavigationProperties {
  user?: firebase.User;
}

const COMPONENT_CLASS = "c-main-navigation";

export const MainNavigation: React.FC<MainNavigationProperties> = (props: MainNavigationProperties) =>
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
            <span>Logout</span>
          </>
        )}
        {props.user == null && <span>Login</span>}
      </div>
    </Navbar>

export default MainNavigation;
