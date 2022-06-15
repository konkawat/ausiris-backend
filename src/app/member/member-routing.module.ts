import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberCreateCorporateComponent } from './components/member-create-corporate/member-create-corporate.component';
import { MemberCreateIndividualComponent } from './components/member-create-individual/member-create-individual.component';
import { MemberListComponent } from './components/member-list/member-list.component';

const routes: Routes = [
  {path:'member-list', component: MemberListComponent},
  {path:'member-create-individual',component:MemberCreateIndividualComponent},
  {path:'member-create-corporate', component: MemberCreateCorporateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
