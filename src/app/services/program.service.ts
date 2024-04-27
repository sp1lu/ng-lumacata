import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private dataUrl: string = '../assets/json/program.json';

  constructor() { }

  async getProgram(): Promise<any> {
    // const programQuery = query(collection(this.firestore, 'program'), orderBy('date'));
    // const programSnapshot = await getDocs(programQuery);
    // const program = this.parseProgram(programSnapshot.docs.map(events => events.data()));

    let response: any = await fetch(this.dataUrl);
    let json: any = await response.json();
    const program: Schedule[] = this.parseProgram(json);
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
