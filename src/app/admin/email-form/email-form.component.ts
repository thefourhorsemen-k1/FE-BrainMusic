import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Email} from '../../shared/model/email.model';
import {EmailService} from '../../shared/services/email.service';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  emailForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: EmailService,
              public notificationService: NotificationService,
              private diaglogRef: MatDialogRef<EmailFormComponent>) {
  }

  get f() {
    return this.emailForm.controls;
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.emailForm = this.fb.group({
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const {value} = this.emailForm;
      this.service.sendMail(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
      this.notificationService.success('Submited Successfully!');
      this.resetForm();
      this.diaglogRef.close('');
    }
  }
}
