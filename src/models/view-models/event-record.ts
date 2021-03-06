import { Record } from "immutable";
import { EventModel } from "models/interfaces/event-model";

const defaultValues: EventModel = {
    date: undefined,
    id: "",
    status: 0,
};

export default class EventRecord
    extends Record(defaultValues)
    implements EventModel {
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

    constructor(params?: Partial<EventModel>) {
        if (params == null) {
            params = Object.assign({}, defaultValues);
        }

        super(params);
    }
}
