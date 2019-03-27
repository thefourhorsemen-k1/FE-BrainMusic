import {Component, OnInit} from '@angular/core';
import {FeedbackComponent} from '../feedback/feedback.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-feedback-button',
  templateUrl: './feedback-button.component.html',
  styleUrls: ['./feedback-button.component.css']
})
export class FeedbackButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      maxWidth: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
