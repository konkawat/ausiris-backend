import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timer } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private app: AppService) {}

  ngOnInit(): void {}

  async dialog(msg: string) {
    //this.app.dialog(msg);
    // const status = await this.app.confirm(msg);
    // console.log(status);
  
    if (await this.app.confirm(msg)) {
      this.app.loading(true);
      await timer(2000).toPromise();
      this.app.loading(false);
      this.app.dialog('success');
    }
  }
}
