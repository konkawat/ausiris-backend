import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { ReceiveCreateComponent } from './components/receive-create/receive-create.component';
import { ReceiveListComponent } from './components/receive-list/receive-list.component';

const routes: Routes = [
  {path:'receive-list', component: ReceiveListComponent},
  {path:'receive-create',component:ReceiveCreateComponent},
  {path:'payment-list', component: PaymentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
