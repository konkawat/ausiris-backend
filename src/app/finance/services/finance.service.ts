import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberListItem } from 'src/app/models/member.model';
import { ITicketList } from 'src/app/models/ticket.model';
import { AuthenService } from 'src/app/services/authen.service';
import { HttpService } from 'src/app/services/http.service';
//import { ITicketList } from 'src/app/trader/components/summary/summary.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

readonly urlApi: string = environment.url_api;
constructor(  
  private http: HttpService,
  private authen: AuthenService,
  ) { }

  getTicketLists() {
    return this.http
        .requestGet(`api/Tickets`, this.authen.getAuthenticated())
        .toPromise() as Promise<ITicketList>;
  }

  getTicketById(id?: string) {
    return this.http
        .requestGet(`api/Tickets/${id}`, this.authen.getAuthenticated()) as Observable<ITicketList[]>;
  }

  getMemberListItem() {
    return this.http
        .requestGet(`api/Members`, this.authen.getAuthenticated()) as Observable<IMemberListItem[]>;
  }
}
