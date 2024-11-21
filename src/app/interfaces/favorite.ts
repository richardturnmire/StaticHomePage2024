export interface IFavorite {
  id: string;
  headingColor: string;
  bodyColor: string;
  title: string;
  links: ILink[];
}

export interface ILink {
  link: string;
  linkDesc: string;
}

export class Favorite implements IFavorite {
  id: string;
  headingColor: string;
  bodyColor: string;
  title: string;
  links: ILink[];

  constructor() {
    this.id = '';
    this.headingColor = '';
    this.bodyColor = '';
    this.title = '';
    this.links = [];
  }
}
