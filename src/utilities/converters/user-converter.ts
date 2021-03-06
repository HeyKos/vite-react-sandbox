import "firebase/firestore";
import firebase from "firebase-init";
import DateUtils from "utilities/date-utils";
import UserRecord from "models/view-models/user-record";

// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

type DocumentData = firebase.firestore.DocumentData;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type SnapshotOptions = firebase.firestore.SnapshotOptions;
type FirestoreDataConverter = firebase.firestore.FirestoreDataConverter<UserRecord>;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

function fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
): UserRecord {
    const data = snapshot.data(options);
    return new UserRecord({
        avatarPath: data.avatarPath,
        isActive: data.isActive,
        id: snapshot.id,
        lastHostedOn: DateUtils.fromSeconds(data.lastHostedOn.seconds),
        name: data.name,
        sequence: data.sequence,
        uid: data.uid,
    });
}

function toFirestore(user: UserRecord): DocumentData {
    return {
        avatarPath: user.avatarPath,
        isActive: user.isActive,
        id: user.id,
        lastHostedOn: user.lastHostedOn,
        name: user.name,
        sequence: user.sequence,
        uid: user.uid,
    };
}

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const UserConverter: FirestoreDataConverter = {
    fromFirestore,
    toFirestore,
};

export default UserConverter;

// #endregion Exports
