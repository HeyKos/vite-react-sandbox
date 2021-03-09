import { useAsyncEffect } from "andculturecode-javascript-react";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import StorageService from "services/storage-service";

export const useLoadEventAvatars = (
    events: List<EventRecord> | null,
    setEvents: React.Dispatch<React.SetStateAction<List<EventRecord> | null>>
): void => {
    useAsyncEffect(
        async function loadAvatars() {
            if (events == null) {
                return;
            }

            const updated = await getUserAvatars(events);
            if (updated.equals(events)) {
                return;
            }
            setEvents(updated);
        },
        [events]
    );

    async function getUserAvatars(
        events: List<EventRecord>
    ): Promise<List<EventRecord>> {
        if (events.size === 0) {
            return List<EventRecord>();
        }

        return List(await Promise.all(events.map(assignAvatarUrlUser)));
    }

    async function assignAvatarUrlUser(event: EventRecord) {
        if (event.user == null || event.user.avatarPath === "") {
            return event;
        }
        const url = await StorageService.getFileUrl(event.user.avatarPath);
        return event.setIn(["user", "avatarUrl"], url);
    }
};
