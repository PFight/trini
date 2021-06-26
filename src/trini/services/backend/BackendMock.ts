import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { User } from "trini/models/User";
import { IBackend } from "./$Backend";

export class BackedMock implements IBackend {
    users: User[] = [
        { name: "Архип", id: "1" },
        { name: "Прохор", id: "2" },
        { name: "Иполит", id: "3" }
    ];
    projects: Project[] = [
        { id: "p2", name: "Построить космолет" },
        { id: "p1", name: "Победить хазар" }        
    ];

    async getTickets(): Promise<Ticket[]> {
        return [
            { id: "1", name: "Спроектировать космолет", 
                description: "Орбитальный самолёт (ОС), воздушно-космический самолёт (ВКС), воздушно-космический летательный аппарат — крылатый летательный аппарат самолётной схемы, выходящий или выводимый на орбиту искусственного спутника Земли посредством вертикального или горизонтального старта и возвращающийся с неё, после выполнения целевых задач, совершая горизонтальную посадку на аэродром, активно используя при снижении подъёмную силу планера. Сочетает в себе свойства как самолёта, так и космического корабля.",
                project: this.projects[0], author: this.users[0], performers: [ this.users[1] ] },
            { id: "2", name: "Изготовить космолет", description: "Согласно проекту", 
                project: this.projects[0], author: this.users[0], performers: [ this.users[1], this.users[2] ] },
            { id: "3", name: "Выйти на орбиту", description: "", 
                project: this.projects[0], author: this.users[1], performers: [ ] },
            { id: "4", name: "Найти хазар", description: "", project: this.projects[1], 
                author: this.users[2], performers: [ this.users[0], this.users[1], this.users[2] ] }
        ]
    }
    async  getProjects(): Promise<Project[]> {
        return this.projects;
    }
}