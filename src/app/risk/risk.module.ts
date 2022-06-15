import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskRoutingModule } from './risk-routing.module';
import { SharedsModule } from '../shareds/shareds.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';


@NgModule({
  declarations: [
    TicketListComponent,
    TicketCreateComponent
  ],
  imports: [
    CommonModule,
    RiskRoutingModule,
    SharedsModule
  ]
})
export class RiskModule { }
