import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-create-individual',
  templateUrl: './member-create-individual.component.html',
  styleUrls: ['./member-create-individual.component.scss']
})
export class MemberCreateIndividualComponent implements OnInit {
  isLoading = false;
  form!: FormGroup;
  constructor(
    private builder: FormBuilder,
    private app: AppService,
    private memberService: MemberService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initialCreateFormData();
  }
  private initialCreateFormData(){
    this.form = this.builder.group({
      memberId: ['',[Validators.required]],
      memberRef: ['',[Validators.required]],
      memberName: ['',[Validators.required]],
    });
  }

  // private initialLoadFormData() {
  //   this.memberService.getMember().subscribe({
  //     next: (data) => {
  //       this.member = data;
  //     },
  //     error: (err) => {
  //       this.app.dialog(err.message);
  //     },
  //   });
  // }

  onSubmit(){
    if (!this.isLoading) {
      if (this.form.invalid){
        this.app.dialog('Something wrong please try again');
      }else{
        this.isLoading = true;
        setTimeout(() => {
          // this.ticketService.onCreateTicket(this.form.value)
          // .subscribe({
          //   next: data =>{
          //     if (data != null) {
          //       this.app.dialog('Create Ticket Success');
          //       this.isLoading = false;
          //       this.router.navigate(['/', 'risk', 'ticket-list']);
          //     }
          //   },
          //   error: err => {
          //     this.app.dialog(err.message);
          //   }
          // });

          this.isLoading = false;
        }, 1000);
      } 
    }   
  }

}
