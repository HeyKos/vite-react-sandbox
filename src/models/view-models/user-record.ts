import { Record } from "immutable";
import { UserModel } from "models/interfaces/user-model";

const defaultValues: UserModel = {
    avatarPath: "",
    avatarUrl: "",
    id: "",
    isActive: false,
    lastHostedOn: undefined,
    name: "",
    sequence: 0,
    uid: "",
};

export default class UserRecord
    extends Record(defaultValues)
    implements UserModel {
    /*
    ---------------------------------------------------------------------------------------------
    Properties
    ---------------------------------------------------------------------------------------------
    */

    // Do NOT set properties on immutable records due to babel and typescript transpilation issue
    // See https://github.com/facebook/create-react-app/issues/6506

    /*
    ---------------------------------------------------------------------------------------------
    Constructor
    ---------------------------------------------------------------------------------------------
    */

    constructor(params?: Partial<UserModel>) {
        if (params == null) {
            params = Object.assign({}, defaultValues);
        }

        super(params);
    }
}
