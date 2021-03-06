import React, { useEffect, useState } from "react";
import EventsService from "services/events-service";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";

const HomePage: React.FC = () => {
    const [events, setEvents] = useState(null as List<EventRecord> | null);
    useEffect(() => {
        EventsService.getEvents().then((events) => {
            setEvents(events);
        });
    }, []);

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
                                <li key={evt.id}>{evt.id}</li>
                            ))}
                        </ul>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
