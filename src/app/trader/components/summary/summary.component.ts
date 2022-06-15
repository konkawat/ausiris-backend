import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';
import { FinanceService } from 'src/app/services/finance.service';
import { MarketfeedsService } from 'src/app/services/marketfeeds.service';

export interface ITicketList {
  ticketRef: string;
  ticketType: string;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  isLoading = false;
  //items?: ITicketList;
  tickets : Ticket[] = [];
  ticketList$!:Observable<any[]>;
  constructor(
    private mfService: MarketfeedsService,
  ) { }

  ngOnInit(): void {
    this.ticketList$ = this.mfService.getTicketList();
    //this.items = this.mfService.getTicketList();
    //this.onSearch();
  }

  onSearch() {
    if (!this.isLoading) {
      this.loadInitia();
    }
  }

  private loadInitia() {
    this.isLoading = true;
    setTimeout(() => {
      //debugger;
      this.mfService.getTicketList().subscribe(
        response => {
          this.tickets = response;
        }
      )
    }, 500);
  }

  
}
