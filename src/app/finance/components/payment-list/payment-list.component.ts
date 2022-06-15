import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';
import { MarketfeedsService } from 'src/app/services/marketfeeds.service';

export interface ITicketList {
  ticketRef: string;
  ticketType: string;
}

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  isLoading = true;
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
      this.mfService.getTicketList().subscribe(
        res => {
          this.tickets = res;
          this.isLoading = true;
        }
      )
    }, 800);
  }

  
}
