import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss']
})
export class CustomSnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
  }

  get getIcon() {
    switch (this.data.snackType) {
      case 'Success':
        return 'done';
      case 'Error':
        return 'error';
      case 'Warn':
        return 'warning';
      case 'Info':
        return 'info';
    }
  }

  closeSnackbar() {
    this.data.snackBar.dismiss();
  }
}
