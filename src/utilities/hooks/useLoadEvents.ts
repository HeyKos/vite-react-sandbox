import { useAsyncEffect } from "andculturecode-javascript-react";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import EventsService from "services/events-service";
import UserService from "services/user-service";

export const useLoadEvents = (
    setEvents: React.Dispatch<React.SetStateAction<List<EventRecord> | null>>
): void => {
    useAsyncEffect(async function loadEventData() {
        let events = await EventsService.getEvents();
        events = await getEventUsers(events);
        setEvents(events);
    }, []);

    async function getEventUsers(
        events: List<EventRecord>
    ): Promise<List<EventRecord>> {
        if (events.size === 0) {
            return List<EventRecord>();
        }

        return List(await Promise.all(events.map(assignUserToEvent)));
    }

    async function assignUserToEvent(event: EventRecord) {
        const user = await UserService.getFromPath(event.userReference);
        return event.set("user", user);
    }
};
