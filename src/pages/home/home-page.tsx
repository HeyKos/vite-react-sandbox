import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase-init";
import "firebase/firestore";

const HomePage = () => {
    const history = useHistory();
    const handleClick = (event: any) => {
        event.preventDefault();
        firebase
            .auth()
            .signOut()
            .then(res => {
                history.push("/auth/login");
            });
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Home</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
   );
}

export default HomePage;
