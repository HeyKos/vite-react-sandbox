import firebase from "firebase-init";
import "firebase/firestore";
import UserRecord from "models/view-models/user-record";
import UserConverter from "utilities/converters/user-converter";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------}

const getFromPath = async (
    userPath: string
): Promise<UserRecord | undefined> => {
    const db = firebase.firestore();
    const documentSnapshot = await db
        .doc(userPath)
        .withConverter(UserConverter)
        .get();

    if (documentSnapshot == null) {
        return undefined;
    }

    return documentSnapshot.data();
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const UserService = {
    getFromPath,
};

export default UserService;

// #endregion Exports
