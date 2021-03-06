import UserRecord from "models/view-models/user-record";

export interface EventModel {
    date: Date | undefined;
    id: string;
    status: number;
    userReference: string;
    user: UserRecord | undefined;
}
