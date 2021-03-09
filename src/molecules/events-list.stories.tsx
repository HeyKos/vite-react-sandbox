import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { EventsList, EventsListProperties } from "./events-list";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import UserRecord from "models/view-models/user-record";

export default {
    title: "Molecules/Events List",
    component: EventsList,
    argTypes: {},
} as Meta;

const Template: Story<EventsListProperties> = (args) => (
    <EventsList {...args} />
);

export const WithData = Template.bind({});
WithData.args = {
    events: List<EventRecord>([
        new EventRecord({
            date: new Date(),
            id: "123456",
            status: 0,
            user: new UserRecord({
                avatarPath: "",
                avatarUrl: "https://placehold.it/50x50",
                id: "123456",
                isActive: true,
                lastHostedOn: new Date(),
                name: "Test User",
                sequence: 0,
                uid: "123456",
            }),
            userReference: "",
        }),
        new EventRecord({
            date: new Date(),
            id: "234567",
            status: 0,
            user: new UserRecord({
                avatarPath: "",
                avatarUrl: "https://placehold.it/50x50",
                id: "234567",
                isActive: true,
                lastHostedOn: new Date(),
                name: "Test User2",
                sequence: 0,
                uid: "234567",
            }),
            userReference: "",
        }),
        new EventRecord({
            date: new Date(),
            id: "345678",
            status: 0,
            user: new UserRecord({
                avatarPath: "",
                avatarUrl: "https://placehold.it/50x50",
                id: "345678",
                isActive: true,
                lastHostedOn: new Date(),
                name: "Test User3",
                sequence: 0,
                uid: "345678",
            }),
            userReference: "",
        }),
    ]),
};

export const Empty = Template.bind({});
Empty.args = {};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
