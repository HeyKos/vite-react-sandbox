import firebase from "firebase-init";
import "firebase/firestore";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

const getEvents = async (): Promise<void> => {
    const db = firebase.firestore();
    const querySnapshot = await db.collection("events").get();
    console.log("querySnapshot", querySnapshot);
    querySnapshot.docs.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
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
