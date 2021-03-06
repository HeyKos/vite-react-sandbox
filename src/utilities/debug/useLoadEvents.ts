import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import { useEffect } from "react";
import EventsService from "services/events-service";
import UserService from "services/user-service";

export const useLoadEvents = (
    setEvents: React.Dispatch<React.SetStateAction<List<EventRecord> | null>>
): void => {
    useEffect(() => {
        loadEventData();
    }, []);

    const loadEventData = async () => {
        let events = await EventsService.getEvents();
        events = await getEventUsers(events);
        setEvents(events);
    };

    const getEventUsers = async (
        events: List<EventRecord>
    ): Promise<List<EventRecord>> => {
        if (events.size === 0) {
            return List<EventRecord>();
        }

        return List(await Promise.all(events.map(assignUserToEvent)));
    };

    const assignUserToEvent = async (event: EventRecord) => {
        const user = await UserService.getFromPath(event.userReference);
        return event.set("user", user);
    };
};
