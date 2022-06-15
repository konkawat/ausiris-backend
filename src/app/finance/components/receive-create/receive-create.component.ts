import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IMemberListItem } from 'src/app/models/member.model';
import { ITicketList, Ticket } from 'src/app/models/ticket.model';
import { AppService } from 'src/app/services/app.service';
import { MarketfeedsService } from 'src/app/services/marketfeeds.service';
import { FinanceService } from '../../services/finance.service';

export interface IReceiveCreate {
  _id: string;
  name: string;
  status: string;
  updatedby: string;
}

@Component({
  selector: 'app-receive-create',
  templateUrl: './receive-create.component.html',
  styleUrls: ['./receive-create.component.scss'],
})
export class ReceiveCreateComponent implements OnInit {
  memberListItem?: Array<IMemberListItem>;
  tickets! : ITicketList[];

  constructor(
    private builder: FormBuilder,
    private financeService: FinanceService,
    private app: AppService,
    private mfService: MarketfeedsService
  ) {}

  ngOnInit() {
    debugger;
    this.initialCreateFormData();
    this.initialLoadFormData();
  }

  @Input('modalRef') modalRef!: BsModalRef;
  form!: FormGroup;
  @Input() modelId?: string;
  @Output() onOutput = new EventEmitter<IReceiveCreate>();
  statusItems: any[] = ['approved', 'disapprove'];

  onSubmit() {
    if (this.form.invalid) {
      this.app.dialog("Data Invalid");
    }
    this.app.dialog("wait coding...");
    this.modalRef.hide();
  }

  private initialCreateFormData() {
    this.form = this.builder.group({
      ticketId: [''],
      ticketRef: ['', [Validators.required]],
      memberId: ['', [Validators.required]],
    });
  }

  private initialLoadFormData() {
  
    // this.mfService.getTicketList(undefined,undefined,undefined,undefined).subscribe( {
    //   next: (data) =>{
    //     debugger;
    //     this.tickets = data;
    //   },
    //   error: (err) =>{
    //     //debugger;
    //     this.app.dialog(err.message);
    //     console.log('*** http error >>>> ' + err.message);
    //   },
    // });

    this.financeService.getTicketById(this.modelId).subscribe({
      next: (data) => {
        debugger;
        this.tickets = data;
      },
      error: (err) => {
        this.app.dialog(err.message);
      },
    });

    this.financeService.getMemberListItem().subscribe({
      next: (data) => {
        this.memberListItem = data;
      },
      error: (err) => {
        this.app.dialog(err.message);
      },
    });
  }
}
