import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, orderBy, query } from '@angular/fire/firestore';
import { Schedule } from '../models/schedule.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private firestore: Firestore) { }

  async getProgram(): Promise<any> {
    const programQuery = query(collection(this.firestore, 'program'), orderBy('date'));
    const programSnapshot = await getDocs(programQuery);
    const program = this.parseProgram(programSnapshot.docs.map(events => events.data()));
    return program;
  }

  parseProgram(schedules: any): Schedule[] {
    return schedules.map((schedule: any) => {
      return new Schedule(schedule.date, schedule.events.map((experience: any) => {
        return new Experience(experience.date, experience.title, experience.desc);
      }))
    });
  }
}
