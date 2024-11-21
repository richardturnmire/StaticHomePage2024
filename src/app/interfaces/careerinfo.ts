export interface ICompany {
  companyId: number;
  companyName: string;
  cityState: string;
  toolTip: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  background1: string;
  background2: string;
  positions: Position[];
  companyInfo: CompanyInfo[];
  jobTasks: JobTask[];
}

export interface CompanyInfo {
  ciLine: string;
}

export interface JobTask {
  jobTask: string;
}

export interface Position {
  title: string;
  startDate: string;
  endDate: string;
}

export class Company implements ICompany {
  companyId: number;
  companyName: string;
  cityState: string;
  toolTip: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  background1: string;
  background2: string;
  positions: Position[];
  companyInfo: CompanyInfo[];
  jobTasks: JobTask[];

  constructor() {
    this.companyId = 0;
    this.companyName = '';
    this.cityState = '';
    this.toolTip = '';
    this.image = '';
    this.imageWidth = '300';
    this.imageHeight = '100';
    this.background1 = '';
    this.background2 = '';
    this.positions = [];
    this.companyInfo = [];
    this.jobTasks = [];
  }
}
