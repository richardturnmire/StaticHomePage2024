import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';

import { NgOptimizedImage, NgStyle } from '@angular/common';

import { Project } from '@app/interfaces/projects';
import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';
import { HttpGetService } from '@app/services/httpget.service';

import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, NgStyle, StdHeadingComponent, MdbScrollbarModule],
})
export class ProjectsComponent {
  projects: Signal<Project[]> = inject(HttpGetService).getProjects();

  getBg1(prj: Project) {
    return {
      'background-color': this.getBgCssVar(prj.background1),
    };
  }

  private getBgCssVar(bgValue: string): string {
    return `var(--my-${bgValue}-100)`;
  }
}
