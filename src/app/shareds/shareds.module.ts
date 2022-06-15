import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ConfirmComponent,
    ReactiveFormsModule,
    FormsModule, 
    BsDatepickerModule,
    ModalModule
  ]
})
export class SharedsModule { }
