import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MdePopoverModule } from '@material-extended/mde';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {OverlayModule} from '@angular/cdk/overlay';

const material = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatProgressBarModule,
  MdePopoverModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatChipsModule,
  MatExpansionModule,
  MatDividerModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatRippleModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  OverlayModule,
  ReactiveFormsModule,
  FormsModule

];
@NgModule({
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MatModule { }