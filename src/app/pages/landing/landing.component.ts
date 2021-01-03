import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { ThemeService } from 'src/app/appServices/theme.service';
import { UserInfoComponent } from 'src/app/includes/popups/user-info/user-info.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  theme; // Global Theme
  step: string = 'landing';
  constructor(
    private _du: DesignUtilityServices,
    public dialog: MatDialog,
    private _themeService: ThemeService
  ) {
    this._themeService.theme.subscribe(res => {
      this.theme = res
    })
  }

  ngOnInit(): void {
  }

  openUserInfoModel(type): void {
    const dialogRef = this.dialog.open(UserInfoComponent, {
      maxWidth: '80%',
      data: {
        type: type
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
  }

}