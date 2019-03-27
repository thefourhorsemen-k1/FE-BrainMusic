import {Component, OnInit, ViewChild} from '@angular/core';
import {EmailFormComponent} from '../email-form/email-form.component';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FeedbackService} from '../../shared/services/feedback.service';
import {Feedback} from '../../shared/model/feedback.model';
import {NotificationService} from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  isPopupOpened = true;
  displayedColumns = ['id', 'name', 'email', 'feedback', 'actions'];
  listData = new MatTableDataSource();
  dataSouce: Feedback[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog,
              private feedbackService: FeedbackService,
              public notificationService: NotificationService) {
  }


  ngOnInit() {
    this.feedbackService.getList().then(result => this.dataSouce = result);
    window.setTimeout(() => this.listData = new MatTableDataSource(this.dataSouce), 500);
    window.setTimeout(() => {
      this.listData.paginator = this.paginator;
      this.listData.sort = this.sort;
    }, 500);

  }

  editFeedback(row) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EmailFormComponent, {
      maxWidth: '60%',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id).subscribe(res => this.ngOnInit());
    window.setTimeout(() => {this.notificationService.warn('Deleted Successfully!');}, 1000);
  }
}
