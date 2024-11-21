import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';

import { ICompany, Project } from '@app/interfaces';

function GetHeading<Project>(prj: Project): string;
function GetHeading<ICompany>(job: ICompany): string;
function GetHeading(str: string): string;
function GetHeading(obj: ICompany | Project | string): string {
  return (obj as ICompany).companyName ?? (obj as Project).projectName ?? obj;
}

@Component({
  selector: 'app-std-heading',
  templateUrl: './std-heading.component.html',
  styleUrls: ['./std-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class StdHeadingComponent implements OnInit {
  readonly stdHeading = input.required<string | ICompany | Project>();

  heading = '';

  ngOnInit() {
    this.heading = GetHeading(this.stdHeading());

    // this.cdRef.detectChanges()
  }
}
