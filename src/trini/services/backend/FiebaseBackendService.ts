import firebase from "firebase/app";
import "firebase/firestore";
import { Project } from "trini/models/Project";
import { Ticket } from "trini/models/Tiket";
import { User } from "trini/models/User";
import { IBackend } from "./$Backend";

export class FirebaseBacked implements IBackend {
    initialized: boolean = false;

    constructor() {
        this.init();
    }

    async getTickets(): Promise<Ticket[]> {
        let tickets = await firebase.firestore().collection("tickets").get();
        let projects = await this.getProjects();
        let getUser = (data: any) => {
            return { id: data?.id, name: data.name } as User;
        };

        return tickets.docs.map(x => {
            let data = x.data();
            return { 
                id: x.id, 
                name: data.name,
                description: data.description,
                author: getUser(data.author),
                performers: data.performers?.map((user: any) => getUser(user)),
                project: projects.find(project => project.id == data.project.id) as Project
            };
        });
    }

    async getProjects(): Promise<Project[]> {
        let projects = await  firebase.firestore().collection("projects").get();
        let docs = projects.docs.map(x => ({ 
            id: x.id, 
            name: x.data().name
        }));    
       return docs;
    }

    init() {
        if (!this.initialized) {
              // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyCYBTDnxfFjVyvSXSElkLm5K6HRuEukj4w",
                authDomain: "trini-2065f.firebaseapp.com",
                projectId: "trini-2065f",
                storageBucket: "trini-2065f.appspot.com",
                messagingSenderId: "864934569275",
                appId: "1:864934569275:web:cf27d2fd97670efe4ec31e",
                measurementId: "G-P5Z6SDWM38"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
    }
}