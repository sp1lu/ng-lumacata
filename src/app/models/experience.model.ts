import { Timestamp } from "@angular/fire/firestore";

export class Experience {
    date: string;
    title: string;
    desc: string;

    constructor(date: string, title: string, desc: string) {
        this.date = date;
        this.title = title;
        this.desc = desc;
    }

    private fromTimestampToDate(timestamp: Timestamp): Date {
        return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    }

    private formaItalianDate(date: Date): string {
        const italianDate = new Intl.DateTimeFormat('it-IT', { hour: 'numeric', minute: 'numeric' }).format(date);
        return italianDate;
    }
}