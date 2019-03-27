import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FeedbackService} from '../shared/services/feedback.service';
import {FeedbackComponent} from '../feedback/feedback.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  constructor(
    private dialog: MatDialog) {
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

  ngOnDestroy(): void {
  }

}


