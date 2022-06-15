import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

const routes: Routes = [
  {path:'ticket-list', component: TicketListComponent},
  {path:'ticket-create',component: TicketCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskRoutingModule { }
