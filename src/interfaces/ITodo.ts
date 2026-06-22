import type { Importance } from "../types/Importance";

export interface ITodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdOn: Date;
    updatedOn: Date | null;
    completedOn: Date | null;
    importance: Importance;
}