import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberListItem } from 'src/app/models/member.model';
import { TicketReceiveSearch } from 'src/app/models/ticket-receive.model';
import { AuthenService } from 'src/app/services/authen.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { ITicketCreate } from '../components/ticket-create/ticket-create.component';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly uri_api: string = environment.url_api;
constructor(
  private http2:HttpClient,
  private http: HttpService,
  private authen: AuthenService,
) { }

onCreateTicket(model: ITicketCreate) {
  return this.http
      .requestPost('api/Tickets', model) as Observable<ITicketCreate>;
}

getMemberListItem() {
  return this.http
      .requestGet(`api/Members`, this.authen.getAuthenticated()) as Observable<IMemberListItem[]>;
}

getTicketList(search_text?: string, dateCRange?: Date[], status?: string, purity?: string):Observable<any[]> {
  let begin_date : Date = new Date()
  let end_date: Date = new Date()
  if (dateCRange != undefined) {
    begin_date = new Date(dateCRange[0].getFullYear(), dateCRange[0].getMonth(), dateCRange[0].getDate(), 0, 0, 0, 0);
    end_date = new Date(dateCRange[1].getFullYear(), dateCRange[1].getMonth(), dateCRange[1].getDate(), 0, 0, 0, 0);
  }

  var trs : TicketReceiveSearch = {
    searchText: search_text === undefined ? '' : search_text,
    status: status === undefined ? '' : status,
    purity: purity === undefined ? '' : purity,
    beginDate: begin_date,
    endDate: end_date
  }

  return this.http2.post<any>(this.uri_api + 'api/TicketReceives',trs);
}
}
