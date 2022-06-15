import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberCreateIndividualComponent } from './components/member-create-individual/member-create-individual.component';
import { SharedsModule } from '../shareds/shareds.module';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberCreateIndividualComponent,
    MemberCreateIndividualComponent,
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedsModule
  ]
})
export class MemberModule { }
