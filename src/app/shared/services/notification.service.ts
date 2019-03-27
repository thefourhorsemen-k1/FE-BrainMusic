import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  };

  constructor(public snackBar: MatSnackBar) {
  }

  success(msg) {
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg) {
    this.config.panelClass = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}
