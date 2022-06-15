import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberCreate, IMemberList } from 'src/app/models/member.model';
import { AuthenService } from 'src/app/services/authen.service';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

constructor(
  private http: HttpService,
  private authen: AuthenService,
) { }

onCreateMember(model: IMemberCreate) {
  debugger;
  return this.http
      .requestPost('api/Tickets', model) as Observable<IMemberCreate>;
}

getMember() {
  return this.http
      .requestGet(`api/Members`, this.authen.getAuthenticated()) as Observable<IMemberList[]>;
}

}
