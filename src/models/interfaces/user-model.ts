export interface UserModel {
    avatarPath: string;
    avatarUrl: string;
    id: string;
    isActive: boolean;
    lastHostedOn: Date | undefined;
    name: string;
    sequence: number;
    uid: string;
}
