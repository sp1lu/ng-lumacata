import { Timestamp } from "@angular/fire/firestore";

export class Experience {
    date: string;
    title: string;
    desc: string;

    constructor(date: Timestamp, title: string, desc: string) {
        this.date = this.formaItalianDate(this.fromTimestampToDate(date));
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