import { Project } from "./Project";
import { User } from "./User";

export interface Ticket {
    id: string;
    name: string;
    description: string;
    performers: Array<User>;
    author: User;
    project: Project;
}