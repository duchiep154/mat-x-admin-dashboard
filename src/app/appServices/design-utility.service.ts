import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { PromptComponent } from '../includes/popups/prompt/prompt.component';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilityServices {

  // New Subjects for Updated Header Concepts
  headerColor = new BehaviorSubject('');  // For Header Color
  sideNavClose = new BehaviorSubject(false);  // For Header Color
      
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {}


  //------------------------------------------// 
  // Custom Prompt                            //
  //------------------------------------------//
  openPrompt(promptData): Observable<any> {
    const dialogRef = this.dialog.open(PromptComponent, {
      data: promptData,
      maxWidth: '500px'
    });

    return dialogRef.afterClosed()
  }

  //------------------------------------------// 
  // Custom SnakeBar                          //
  //------------------------------------------//
  openSnackBar(message: string, action: string, duration: number, className: string): void {
    this.snackBar.open(message, action, {
      duration: duration * 1000,
      panelClass: [className]
    });
  }

  //------------------------------------------// 
  // Hex to RGBA                              //
  //------------------------------------------//
  hexToRgbA(hex, opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
    }
    throw new Error('Bad Hex');
  }
  
}
