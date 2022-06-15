
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicketList } from 'src/app/models/ticket.model';
import { AppService } from 'src/app/services/app.service';
import { MarketfeedsService } from 'src/app/services/marketfeeds.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IReceiveCreate } from '../receive-create/receive-create.component';

@Component({
  selector: 'app-receive-list',
  templateUrl: './receive-list.component.html',
  styleUrls: ['./receive-list.component.scss']
})
export class ReceiveListComponent implements OnInit {
  isLoading = false;
  isClear = false;
  txtSearch? = "";
  ddlStatus? = "";
  ddlPurity? = "";
  // bsInlineValue = new Date();
  bsDateRangeValue?: Date[] = [new Date(), new Date()];

  tickets : ITicketList[] = [];
  ticketList$!:Observable<any[]>;

  modalRef!: BsModalRef;
  modelId?: string;

  constructor(
    private mfService: MarketfeedsService,
    private app: AppService,
    private localeService: BsLocaleService,
    private modelService: BsModalService
  ) { }

  ngOnInit(): void {
    this.localeService.use('en');
    this.onSearch();
  }

  onSearch() {
    if (!this.isLoading) {
      this.loadInitia(this.txtSearch, this.bsDateRangeValue, this.ddlStatus, this.ddlPurity);
    }
  }
  
  onClear() {
    this.isClear = true;
    setTimeout(() => {
      this.txtSearch = "";
      this.bsDateRangeValue = [new Date(), new Date()];
      this.ddlStatus = "";
      this.ddlPurity = "";
      this.isClear = false;
    }, 300);
  }

  private loadInitia(searchText?: string, bsDateRangeValue?: Date[] , status?: string, purity?: string) {
    this.isLoading = true;
    debugger;
    setTimeout(() => {
      this.mfService.getTicketList(searchText,bsDateRangeValue,status,purity)
      .subscribe( {
        next: (data) =>{
          debugger;
          this.tickets = data;
          this.isLoading = false;
        },
        error: (err) =>{
          this.app.dialog(err.message);
          console.log('*** http error >>>> ' + err.message);
        },
      });
    }, 500);
  }

  openModal(template: TemplateRef<any>, _id: string) {
    //console.log(template);
    this.modelId = _id;
    //this.modalRef = this.modelService.show(template);
    this.modalRef = this.modelService.show(template);//this.modelService.show(template, { class: 'modal-lg' });
    this.modalRef.setClass('modal-custom-style');
    
    return false;
  }
  onOutput(output: IReceiveCreate) {
    this.app.dialog('Edit');
  }
  
}
