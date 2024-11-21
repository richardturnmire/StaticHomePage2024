import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HomeComponent } from '@app/home/home.component';
import { JobsComponent } from '@app/jobs/jobs.component';
import { ProjectsComponent } from '@app/projects/projects.component';

// import { EducationComponent } from "@app/education/education.component";
// import { BootcampComponent } from "@app/bootcamp/bootcamp.component";
import { FooterComponent } from '@app/footer/footer.component';
import { SkillsComponent } from '@app/skills/skills.component';

import { NgxScrollTopModule } from 'ngx-scrolltop';

@Component({
  selector: 'app-landingzone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landingzone.component.html',
  styleUrls: [],
  imports: [
    CommonModule,
    HomeComponent,
    SkillsComponent,
    JobsComponent,
    ProjectsComponent,
    //   EducationComponent,
    //   BootcampComponent,
    FooterComponent,
    NgxScrollTopModule,
  ],
})
export class LandingzoneComponent {
  title = 'Resume';
}
