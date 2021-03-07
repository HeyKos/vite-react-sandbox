import firebase from "firebase-init";
import "firebase/firebase-storage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getFileUrl = async (path: string): Promise<any> => {
    const storage = firebase.storage();
    const pathReference = storage.ref(path);
    const url = await pathReference.getDownloadURL();
    return url;
};

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

const StorageService = {
    getFileUrl,
};

export default StorageService;

// #endregion Exports
