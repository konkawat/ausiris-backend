import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMemberListItem } from 'src/app/models/member.model';
import { AppService } from 'src/app/services/app.service';
import { TicketService } from '../../services/ticket.service';

export interface ITicketCreate {
  memberId: string;
  staffId: string;
  marketingId: string;
  ticketType: string;
  purity: string;
  quantity: string;
  price: string;
  amount: string;
  ipAddress: string
  //createdBy: string;
} 

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {
  isLoading = false;
  memberListItem?: Array<IMemberListItem>;
  constructor(
    private builder: FormBuilder,
    private app: AppService,
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialCreateFormData();
    this.initialLoadFormData();
  }

  form!: FormGroup;
  private initialCreateFormData(){
    this.form = this.builder.group({
      memberId: ['',[Validators.required]],
      ticketType: ['',[Validators.required]],
      purity: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      price: ['',[Validators.required]],
      amount: ['',[Validators.required]],
    });
  }
  
  private initialLoadFormData() {
    this.ticketService.getMemberListItem().subscribe({
      next: (data) => {
        this.memberListItem = data;
      },
      error: (err) => {
        this.app.dialog(err.message);
      },
    });
  }
  onSubmit() {
    if (!this.isLoading) {
      if (this.form.invalid){
        this.app.dialog('Something wrong please try again');
      }else{
        this.isLoading = true;
        setTimeout(() => {
          this.form.value.ipAddress = '1.1.1.1';
          this.ticketService.onCreateTicket(this.form.value)
          .subscribe({
            next: data =>{
              if (data != null) {
                this.app.dialog('Create Ticket Success');
                this.isLoading = false;
                this.router.navigate(['/', 'risk', 'ticket-list']);
              }
            },
            error: err => {
              this.app.dialog(err.message);
            }
          });
        }, 1000);
      } 
    }   
  }

  onClick(){
  }

}
