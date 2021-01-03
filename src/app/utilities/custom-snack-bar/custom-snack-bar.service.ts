import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackBar {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  successMessage(message, action, horizontalPosition,verticalPosition ) {
    this._snackBar.openFromComponent(CustomSnackBarComponent, {
      data: {
        message,
        action,
        snackType: 'Success',
        snackBar: this._snackBar
      },
      duration: 2000,
      horizontalPosition: horizontalPosition || this.horizontalPosition,
      verticalPosition: verticalPosition || this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

  errorMessage(message, action, horizontalPosition,verticalPosition) {
    this._snackBar.openFromComponent(CustomSnackBarComponent, {
      data: {
        message,
        action,
        snackType: 'Error',
        snackBar: this._snackBar
      },
      duration: 2000,
      horizontalPosition: horizontalPosition || this.horizontalPosition,
      verticalPosition: verticalPosition || this.verticalPosition,
      panelClass: ['error-snackbar']
    });
  }

  infoMessage(message, action, horizontalPosition,verticalPosition) {
    this._snackBar.openFromComponent(CustomSnackBarComponent, {
      data: {
        message,
        action,
        snackType: 'Info',
        snackBar: this._snackBar
      },
      duration: 2000,
      horizontalPosition: horizontalPosition || this.horizontalPosition,
      verticalPosition: verticalPosition || this.verticalPosition,
      panelClass: ['info-snackbar']
    });
  }
}
