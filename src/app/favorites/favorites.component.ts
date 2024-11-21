import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';

import { IFavorite } from '@app/interfaces/favorite';
import { HttpGetService } from '@app/services/httpget.service';

import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [CommonModule, StdHeadingComponent, MdbTooltipModule, MdbTabsModule],
})
export class FavoritesComponent {
  favorites: Signal<IFavorite[]> = inject(HttpGetService).getFavorites();

  getBg0(fav: IFavorite) {
    return `--tab-color: ${fav.headingColor};`;
  }

  getBg1(fav: IFavorite) {
    return `background-color: var(${fav.headingColor});`;
  }

  getBg2(fav: IFavorite) {
    return `background-color: var(${fav.bodyColor});`;
  }
}
