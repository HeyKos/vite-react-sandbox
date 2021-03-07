import firebase from "firebase-init";
import "firebase/firestore";
import { List } from "immutable";
import EventRecord from "models/view-models/event-record";
import EventConverter from "utilities/converters/event-converter";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

const getEvents = async (): Promise<List<EventRecord>> => {
    const db = firebase.firestore();
    let events: List<EventRecord> = List<EventRecord>();
    const querySnapshot = await db
        .collection("events")
        .withConverter(EventConverter)
        .get();

    if (querySnapshot == null) {
        return events;
    }
    if (querySnapshot.docs == null || querySnapshot.docs.length === 0) {
        return events;
    }

    querySnapshot.docs.forEach((doc) => {
        events = events.push(doc.data() as EventRecord);
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
