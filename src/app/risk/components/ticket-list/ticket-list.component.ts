import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ITicketList, Ticket } from 'src/app/models/ticket.model';
import { AppService } from 'src/app/services/app.service';
import { MarketfeedsService } from 'src/app/services/marketfeeds.service';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  isLoading = false;
  isClear = false;
  txtSearch? = "";
  ddlStatus? = "";
  ddlPurity? = "";
  // bsInlineValue = new Date();
  bsDateRangeValue?: Date[] = [new Date(), new Date()];

  tickets : ITicketList[] = [];
  modalRef!: BsModalRef;
  modelId?: string;

  constructor(
    private ticketService: TicketService,
    private app: AppService,
    private localeService: BsLocaleService
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
      this.ticketService.getTicketList(searchText,bsDateRangeValue,status,purity)
      .subscribe( {
        next: (data) =>{
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

  
}
