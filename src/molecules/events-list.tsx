import React from "react";
import EventRecord from "models/view-models/event-record";
import { List } from "immutable";
import Table from "react-bootstrap/Table";

export interface EventsListProperties {
    events?: List<EventRecord> | null;
}

export const EventsList: React.FC<EventsListProperties> = (
    props: EventsListProperties
) => {
    const hasEvents = props.events != null && props.events.size > 0;

    return (
        <>
            {!hasEvents && <h3>No Events Found!</h3>}
            {hasEvents && (
                <Table variant="dark" responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Host</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.events?.map((evt) => (
                            <tr key={evt.id}>
                                <td>{evt.date?.toLocaleDateString()}</td>
                                <td>{evt.user?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};
