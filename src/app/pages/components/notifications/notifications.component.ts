import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { CustomSnackBar } from '../../../utilities/custom-snack-bar/custom-snack-bar.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private _snackBar: MatSnackBar,
    private customSnackBar: CustomSnackBar,
    private _du: DesignUtilityServices) { }

  ngOnInit(): void {
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openCustomSnackBar(message: string, action: string, type: string) {
    if (type === 'success') {
      this.customSnackBar.successMessage(message, action, this.horizontalPosition, this.verticalPosition);
    }
    if (type === 'info') {
      this.customSnackBar.infoMessage(message, action, this.horizontalPosition, this.verticalPosition);
    }
    if (type === 'error') {
      this.customSnackBar.errorMessage(message, action, this.horizontalPosition, this.verticalPosition);
    }
  }


  openModel(type: string) {
    let data = {
      type: type,
      title: "Here's a message!",
      text: 'A few words about this alert ...'
    }
    this._du.openPrompt(data).subscribe(res => {
    })
  }
}
