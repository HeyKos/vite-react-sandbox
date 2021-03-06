import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import { useLoadEvents } from "utilities/debug/useLoadEvents";

const HomePage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const [events, setEvents] = useState(null as List<EventRecord> | null);
    useLoadEvents(setEvents);

    // #endregion Functions

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Events</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {!events ||
                        (events.size === 0 && <h3>No Events Found!</h3>)}
                    {events && events.size > 0 && (
                        <ul>
                            {events.map((evt) => (
                                <li
                                    key={
                                        evt.id
                                    }>{`Event Id: ${evt.id} | User: ${evt.user?.name}`}</li>
                            ))}
                        </ul>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
