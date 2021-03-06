import "firebase/firestore";
import firebase from "firebase-init";
import EventRecord from "models/view-models/event-record";
import DateUtils from "utilities/date-utils";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type SnapshotOptions = firebase.firestore.SnapshotOptions;
type FirestoreDataConverter = firebase.firestore.FirestoreDataConverter<EventRecord>;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

function fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
): EventRecord {
    const data = snapshot.data(options);
    return new EventRecord({
        date: DateUtils.fromSeconds(data.date.seconds),
        id: snapshot.id,
        status: data.status,
    });
}

function toFirestore(event: EventRecord): DocumentData {
    return {
        date: event.date,
        id: event.id,
        status: event.status,
    };
}

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const EventConverter: FirestoreDataConverter = {
    fromFirestore,
    toFirestore,
};

export default EventConverter;

// #endregion Exports
