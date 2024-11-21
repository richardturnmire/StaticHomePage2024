import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';

import { HttpGetService } from '@app/services/httpget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, MdbTooltipModule],
})
export class HomeComponent {
  quotes = inject(HttpGetService).getQuotes();
}
