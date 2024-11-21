import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';

import {
  IsActiveMatchOptions,
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';

import { ICompany, Project } from '@app/interfaces';

import { HttpGetService } from '@app/services/httpget.service';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';

import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';

import { NgxScrollTopModule } from 'ngx-scrolltop';

// import { LandingzoneComponent } from "@app/landingzone/landingzone.component";

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    MdbCollapseModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbSidenavModule,
    MdbTooltipModule,
    NgOptimizedImage,
    NgxScrollTopModule,
    //     LandingzoneComponent,
    RouterLinkActive,
    MdbLoadingModule,
  ],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent {
  private httpService = inject(HttpGetService);
  jobs: Signal<ICompany[]> = this.httpService.getJobs();
  projects: Signal<Project[]> = this.httpService.getProjects();

  isActiveMatchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    fragment: 'exact',
    matrixParams: 'ignored',
  };

  ariaCurrentWhenActive:
    | boolean
    | 'time'
    | 'page'
    | 'location'
    | 'step'
    | 'date'
    | undefined = 'page';
}
