import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  fetching: boolean = false;
  Form: FormGroup;
  validator = {
    mobile: '^((\\+91-?)|0)?[0-9]{10}$',
    email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
  }

  constructor(public dialogRef: MatDialogRef<UserInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private _du: DesignUtilityServices,
    private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['anup@tastio.com', [Validators.required, Validators.pattern(this.validator.email)]],
      phone: ['9876543210',],
    });
  }

  onSubmit() {
    this.fetching = true;
    // stop here if form is invalid
    if (this.Form.invalid) {
      return;
    }

    // this.dialogRef.close(this.Form.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Form.value, null, 4));


    setTimeout(() => {
      this.fetching = false;
      this.router.navigate(['menu']);
      this.dialogRef.close();
      this.onReset();
    }, 1000);

  }
  onReset() {
    this.Form.reset();
  }


}
