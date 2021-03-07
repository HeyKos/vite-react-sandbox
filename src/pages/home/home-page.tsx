import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import { useLoadEvents } from "utilities/debug/useLoadEvents";
import { EventsList } from "molecules/events-list";
import { useLoadEventAvatars } from "utilities/debug/useLoadEventAvatars";

const HomePage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Functions
    // -----------------------------------------------------------------------------------------

    const [events, setEvents] = useState(null as List<EventRecord> | null);
    useLoadEvents(setEvents);
    useLoadEventAvatars(events, setEvents);

    // #endregion Functions

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Home</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Events</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EventsList events={events} />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
