import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { ConfirmComponent } from '../shareds/components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private loadingSubject: Subject<boolean>;
  constructor(private matSnackbar: MatSnackBar, private matDialog: MatDialog) {
    this.loadingSubject = new Subject<boolean>();
  }

  get getLoading(){ return this.loadingSubject;}

  loading(status:boolean){
    this.loadingSubject.next(status);
  }

  dialog(msg: string) {
    return this.matSnackbar.open(msg, 'close', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      //panelClass: ['mat-toolbar', 'mat-warn'],
      panelClass:['matSnackbarColor'],
      //panelClass: ['green-snackbar', 'login-snackbar']
    });
  }
  confirm(msg: string) {
    return this.matDialog
      .open(ConfirmComponent, {
        //width: '300px',
        data: msg,
        disableClose: true,
      })
      .afterClosed()
      .toPromise();
  }
}
