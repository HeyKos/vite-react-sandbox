import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import { useLoadEvents } from "utilities/hooks/useLoadEvents";
import { EventsList } from "molecules/events-list";
import { useLoadEventAvatars } from "utilities/hooks/useLoadEventAvatars";

const HomePage: React.FC = () => {
    // -----------------------------------------------------------------------------------------
    // #region Hooks
    // -----------------------------------------------------------------------------------------

    const [events, setEvents] = useState(null as List<EventRecord> | null);
    const [isLoading, setIsLoading] = useState(true);
    useLoadEvents(setEvents);
    useLoadEventAvatars(events, setEvents);
    useEffect(
        function checkIfLoading() {
            if (events == null || events.size === 0) {
                return;
            }
            setIsLoading(false);
        },
        [events]
    );

    // #endregion Hooks

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
                    <EventsList events={events} isLoading={isLoading} />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
