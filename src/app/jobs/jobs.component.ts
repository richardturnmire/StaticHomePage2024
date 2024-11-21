import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Signal,
} from '@angular/core';

import { NgIf, NgOptimizedImage } from '@angular/common';
import { ICompany } from '@app/interfaces/careerinfo';

import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';

import { HttpGetService } from '@app/services/httpget.service';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgOptimizedImage, MdbScrollbarModule, StdHeadingComponent],
  providers: [],
})
export class JobsComponent {
  // @Input() job!: ICompany;
  jobs: Signal<ICompany[]> = inject(HttpGetService).getJobs();

  constructor() {
    effect(() => {
      console.log(`Total jobs count is: ${this.jobs().length}`);
    });
  }
  getBg1(job: ICompany) {
    return `var(--my-${job.background1}-500)`;
  }

  getBg2(job: ICompany) {
    return `var(--my-${job.background1}-100)`;
  }
}
