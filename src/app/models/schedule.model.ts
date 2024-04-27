import { Timestamp } from "@angular/fire/firestore";
import { Experience } from "./experience.model";

export class Schedule {
    date: string;
    events: Experience[];

    constructor(date: string, events: Experience[]) {
        this.date = date;
        this.events = events;
    }

    private fromTimestampToDate(timestamp: Timestamp): Date {
        return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    }

    private formaItalianDate(date: Date): string {        
        const italianDate = new Intl.DateTimeFormat('it-IT', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
        return italianDate;
    }
}