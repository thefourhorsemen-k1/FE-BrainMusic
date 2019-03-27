import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {FeedbackService} from '../shared/services/feedback.service';
import {Feedback} from '../shared/model/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: FeedbackService,
              public diaglogRef: MatDialogRef<FeedbackComponent>) {
  }

  ngOnInit() {
    this.resetForm();
  }

  get f() {
    return this.feedbackForm.controls;
  }

  resetForm() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['']
    });
  }

  onSend() {
    if (this.feedbackForm.valid) {
      const {value} = this.feedbackForm;
      this.service.createFeedback(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
      this.resetForm();
      this.diaglogRef.close('');
    }
  }

}
