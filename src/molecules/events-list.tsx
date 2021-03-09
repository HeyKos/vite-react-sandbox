import React from "react";
import EventRecord from "models/view-models/event-record";
import { List } from "immutable";
import "./events-list.scss";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

export interface EventsListProperties {
    events?: List<EventRecord> | null;
    isLoading?: boolean;
}

const COMPONENT_CLASS = "c-events-list";

export const EventsList: React.FC<EventsListProperties> = (
    props: EventsListProperties
) => {
    const hasEvents = props.events != null && props.events.size > 0;
    const isLoading = props.isLoading ?? false;

    return (
        <>
            {isLoading && (
                <h3 className={COMPONENT_CLASS}>Loading Events...</h3>
            )}
            {!hasEvents && !isLoading && (
                <h3 className={COMPONENT_CLASS}>No Events Found!</h3>
            )}
            {hasEvents && (
                <Table
                    className={COMPONENT_CLASS}
                    variant="dark"
                    responsive
                    striped
                    bordered
                    hover>
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
                                <td>
                                    {evt.user?.avatarUrl !== "" && (
                                        <Image
                                            src={evt.user?.avatarUrl}
                                            roundedCircle
                                        />
                                    )}
                                    {evt.user?.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};
