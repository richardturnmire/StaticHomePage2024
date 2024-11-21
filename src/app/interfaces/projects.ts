export class Project {
  projectId = 0;
  projectName = '';
  toolTip = '';
  image = '';
  background1 = '';
  background2 = '';
  background3 = '';
  projectDescription: ProjectDescription[] = [];
  buttons: Button[] = [];
  resources: string[] = [];
}

export interface Button {
  buttonId: number;
  buttonText: string;
  buttonLink: string;
}

export interface ProjectDescription {
  projectText: string;
}
