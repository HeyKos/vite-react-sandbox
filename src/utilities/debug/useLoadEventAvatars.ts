import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import { useEffect } from "react";
import StorageService from "services/storage-service";

export const useLoadEventAvatars = (
    events: List<EventRecord> | null,
    setEvents: React.Dispatch<React.SetStateAction<List<EventRecord> | null>>
): void => {
    useEffect(() => {
        if (events == null) {
            return;
        }
        loadAvatars(events);
    }, [events]);

    const loadAvatars = async (events: List<EventRecord>) => {
        const updated = await getUserAvatars(events);
        setEvents(updated);
    };

    const getUserAvatars = async (
        events: List<EventRecord>
    ): Promise<List<EventRecord>> => {
        if (events.size === 0) {
            return List<EventRecord>();
        }

        return List(await Promise.all(events.map(assignAvatarUrlUser)));
    };

    const assignAvatarUrlUser = async (event: EventRecord) => {
        if (event.user == null || event.user.avatarPath === "") {
            return event;
        }
        const url = await StorageService.getFileUrl(event.user.avatarPath);
        return event.setIn(["user", "avatarUrl"], url);
    };
};
