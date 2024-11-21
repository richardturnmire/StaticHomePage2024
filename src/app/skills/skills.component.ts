import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Signal,
} from '@angular/core';
import { HttpGetService } from '@app/services/httpget.service';

import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';
import { ISkill } from '@app/interfaces/skills';

// import { StarsComponent } from '@app/helpers/stars/stars.component'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CommonModule, StdHeadingComponent],
})
export class SkillsComponent {
  skills: Signal<ISkill[]> = inject(HttpGetService).getSkills();

  constructor() {
    effect(() => {
      console.log(`Total skills count is: ${this.skills().length}`);
    });
  }

  setStars(item: ISkill): string[] {
    const numStars = item.rating;
    const strStars = '\f005 ';
    return [`--starContent: ${strStars.repeat(numStars)}`];
  }
}
