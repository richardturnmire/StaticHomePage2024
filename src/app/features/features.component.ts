import { ChangeDetectionStrategy, Component } from '@angular/core';

import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';
import { Observable, of } from 'rxjs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { AsyncPipe } from '@angular/common';

interface Feature {
  name: string;
  version: string | undefined;
  description: string;
  docsUrl: string;
  docsIcon: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, StdHeadingComponent, MdbTooltipModule],
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      name: 'Angular',
      version: '11.0.3',
      description: 'Modern powerful framework',
      docsUrl: 'https://angular.io/docs',
      docsIcon: 'fa-book',
    },
    {
      name: 'Angular Cli',
      version: '11.0.3',
      description: 'Command line interface for angular',
      docsUrl: 'https://cli.angular.io/',
      docsIcon: 'fa-book',
    },
    {
      name: 'NgRx',
      version: '10.1.0',
      description: 'Redux for angular',
      docsUrl: 'https://ngrx.io',
      docsIcon: 'fa-book',
    },
    {
      name: 'RxJS',
      version: '6.6.3',
      description: 'Asynchronous and event-based programs',
      docsUrl: 'https://rxjs-dev.firebaseapp.com/guide/overview',
      docsIcon: 'fa-book',
    },
    {
      name: 'Typescript',
      version: '4.0.5',
      description: 'Superset of JavaScript',
      docsUrl: 'https://www.typescriptlang.org',
      docsIcon: 'fa-book',
    },
    {
      name: 'Lazy Loading',
      version: undefined,
      description: 'Lazy loaded feature modules',
      docsUrl:
        'https://angular.io/guide/router#lazy-loading-route-configuration',
      docsIcon: 'fa-book',
    },
    {
      name: 'Tslint',
      version: '6.1.0',
      description: 'Identify problematic patterns in Typescript code',
      docsUrl: 'https://palantir.github.io/tslint/',
      docsIcon: 'fa-book',
    },
    {
      name: 'Compodoc',
      version: '1.1.11',
      description: 'Detailed documentation for your project',
      docsUrl: 'https://compodoc.app/',
      docsIcon: 'fa-book',
    },
    {
      name: 'Storybook',
      version: '6.1.10',
      description: 'A component library for developing components in isolation',
      docsUrl: 'https://storybook.js.org/',
      docsIcon: 'fa-book',
    },
    {
      name: 'route-parser',
      version: '0.0.5',
      description: 'Library for parsing route patterns',
      docsUrl: 'https://github.com/rcs/route-parser',
      docsIcon: 'fa-book',
    },
  ];

  features$: Observable<Feature[]> = of(this.features);

  trackByFeatureName(index: number, feature: Feature): string {
    return feature.name;
  }
}
