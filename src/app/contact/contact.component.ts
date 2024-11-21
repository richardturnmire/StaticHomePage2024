import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { StdHeadingComponent } from '@app/shared/std-heading/std-heading.component';

interface IContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  subject: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [StdHeadingComponent, ReactiveFormsModule, NgOptimizedImage],
  selector: 'app-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  characterCount = 0;
  minLength = 10;
  maxLength = 500;

  fb = inject(NonNullableFormBuilder);

  formContact: FormGroup<IContactForm> = this.fb.group<IContactForm>({
    name: this.fb.control<string>('', {
      validators: [Validators.required, Validators.minLength(this.minLength)],
    }),
    email: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.email,
      ],
    }),
    subject: this.fb.control<string>('', {
      validators: [Validators.required, Validators.minLength(this.minLength)],
    }),
    message: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
      ],
    }),
  });

  ngOnInit() {
    this.formContact.controls.message.valueChanges.subscribe((value) => {
      this.characterCount = value.length;
    });
  }

  onSubmit() {
    if (this.formContact.valid && this.formContact.touched) {
      console.log('Valid?:', this.formContact.valid);
    } else {
      this.formContact.markAllAsTouched();
    }
  }
  get email() {
    return this.formContact.controls.email;
  }
  get name() {
    return this.formContact.controls.name;
  }
  get message() {
    return this.formContact.controls.message;
  }
  get subject() {
    return this.formContact.controls.subject;
  }
}
