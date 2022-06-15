import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITicketList } from '../trader/components/summary/summary.component';
import { AuthenService } from './authen.service';
import { HttpService } from './http.service';

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

}
