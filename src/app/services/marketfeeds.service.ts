import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { TicketReceiveSearch } from '../models/ticket-receive.model';
//import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MarketfeedsService {
  
  socket: any;
  //readonly uri: string = 'http://203.154.83.135:25555';
  readonly uri: string = 'http://localhost:7300';
  readonly uri_api: string = environment.url_api;

  constructor(
    private http:HttpClient
  ) {
    //this.socket = io(this.uri);;
  }


  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data:Array<{bid:string,ask:string}>) => {
        subscriber.next(data);
      });
    });
  }

emit(eventName: string, data: any){
  this.socket.emit(eventName, data);
}

getTicketList(search_text?: string, dateCRange?: Date[], status?: string, purity?: string):Observable<any[]> {
  let begin_date : Date = new Date()
  let end_date: Date = new Date()
  if (dateCRange != undefined) {
    begin_date = new Date(dateCRange[0].getFullYear(), dateCRange[0].getMonth(), dateCRange[0].getDate(), 0, 0, 0, 0);
    end_date = new Date(dateCRange[1].getFullYear(), dateCRange[1].getMonth(), dateCRange[1].getDate(), 0, 0, 0, 0);
  }
  //search_text =  search_text === '' ? undefined : search_text,

  var trs : TicketReceiveSearch = {
    searchText: search_text === undefined ? '' : search_text,
    status: status === undefined ? '' : status,
    purity: purity === undefined ? '' : purity,
    beginDate: begin_date,
    endDate: end_date
  }

  return this.http.post<any>(this.uri_api + 'api/TicketReceives',trs);
}

// getTicketList():Observable<Ticket[]> {
//   return this.http.get<Ticket[]>(this.uri_api + 'api/tickets');
// }

}
