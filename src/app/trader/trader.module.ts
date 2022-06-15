import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraderRoutingModule } from './trader-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SharedsModule } from '../shareds/shareds.module';
import { FinanceService } from '../services/finance.service';


@NgModule({
  declarations: [
    DashboardComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    TraderRoutingModule,
    SharedsModule
  ]
})
export class TraderModule { }
