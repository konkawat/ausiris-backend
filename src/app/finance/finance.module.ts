import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { ReceiveListComponent } from './components/receive-list/receive-list.component';
import { ReceiveCreateComponent } from './components/receive-create/receive-create.component';
import { SharedsModule } from '../shareds/shareds.module';
import { PaymentListComponent } from './components/payment-list/payment-list.component';


@NgModule({
  declarations: [
    ReceiveListComponent,
    ReceiveCreateComponent,
    PaymentListComponent,
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedsModule
  ],
})
export class FinanceModule {}
