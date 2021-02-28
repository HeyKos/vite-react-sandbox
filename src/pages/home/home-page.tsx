import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase-init";
import "firebase/firestore";
import EventsService from "services/events-service";

const HomePage: React.FC = () => {
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

    const getEvents = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const events = await EventsService.getEvents();
        events.map((event) => console.log("my event", event));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Home</h1>
            <button onClick={getEvents}>Get Events</button>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default HomePage;
