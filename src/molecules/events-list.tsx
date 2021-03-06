import React from "react";
import EventRecord from "models/view-models/event-record";
import { List } from "immutable";
import Table from "react-bootstrap/Table";

export interface EventsListProperties {
    events: List<EventRecord> | null;
}

export const EventsList: React.FC<EventsListProperties> = (
    props: EventsListProperties
) => {
    return (
        <>
            {!props.events ||
                (props.events.size === 0 && <h3>No Events Found!</h3>)}
            {props.events && props.events.size > 0 && (
                <Table variant="dark" responsive striped bordered>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Host</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.events.map((evt) => (
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
