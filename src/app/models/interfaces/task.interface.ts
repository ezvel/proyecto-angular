export enum Levels {
    "info",
    "urgent",
    "blocking"
}
export interface ITask {
    title: string;
    description: string;
    completed: boolean;
    level: Levels;
}