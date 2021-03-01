import firebase from "firebase-init";
import "firebase/firestore";
import { EventModel } from "interfaces/event-model";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

function toDateTime(secs: number): Date {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}

const getEvents = async (): Promise<EventModel[]> => {
    const db = firebase.firestore();
    const querySnapshot = await db.collection("events").get();
    if (querySnapshot == null) {
        return [];
    }
    if (querySnapshot.docs == null || querySnapshot.docs.length === 0) {
        return [];
    }
    const events: EventModel[] = [];
    querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        const event: EventModel = {
            date: toDateTime(data.date.seconds),
            id: doc.id,
            status: data.status,
        };
        events.push(event);
    });
    return events;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const EventsService = {
    getEvents,
};

export default EventsService;

// #endregion Exports
