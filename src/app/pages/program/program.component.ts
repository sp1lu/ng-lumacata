import { Component } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { Schedule } from '../../models/schedule.model';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  public program!: Schedule[];

  constructor(public programService: ProgramService) { }

  async ngOnInit(): Promise<void> {
    this.program = await this.programService.getProgram();      
  }
}
