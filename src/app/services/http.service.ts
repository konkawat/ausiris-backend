import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(
  private http: HttpClient,
  private router: Router,
  private authenService: AuthenService
) { }
private address: string = environment.url_api;

 // ส่งข้อมูลแบบ Get Param
 requestGetParam(url: string,id?: string) {
  return this.http
      .get(`${this.address}${url}${id}`, {
          headers: this.appendHeaders(id)
      })
      .pipe(catchError(err => this.handelError(err)));
}

// ส่งข้อมูลแบบ Get method
requestGet(url: string, accessToken?: string) {
  return this.http
      .get(`${this.address}${url}`, {
          headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
}

// ส่งข้อมูลแบบ Post method
requestPost(url: string, body: any, accessToken?: string) {
  return this.http
      .post(`${this.address}${url}`, body, {
          headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
}

// ส่งข้อมูลแบบ Delete method
requestDelete(url: string, accessToken?: string) {
  return this.http
      .delete(`${this.address}${url}`, {
          headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
}

// ส่งข้อมูลแบบ Put method
requestPut(url: string, body: any, accessToken?: string) {
  return this.http
      .put(`${this.address}${url}`, body, {
          headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
}

// ปรับแต่ง Error ใหม่
private handelError(errResponse: HttpErrorResponse): Observable<any> {
  // ตรวจสอบว่ามีการเข้าถึงหน้าที่ไม่ยอมรับหรือไม่
  if (errResponse.status == 401) {
      this.authenService.clearAuthenticated();
      this.router.navigate(['/', "login"]);
  }
  // errResponse['Message'] = errResponse.message;
  // if (errResponse.error && errResponse.error.message)
  //     errResponse['Message'] = errResponse.error.message;
  // else if (errResponse.error && errResponse.error.Message)
  //     errResponse['Message'] = errResponse.error.Message;
    errResponse.error.message = errResponse.message;
  if (errResponse.error && errResponse.error.message)
      errResponse.error.message = errResponse.error.message;
  else if (errResponse.error && errResponse.error.Message)
      errResponse.error.message = errResponse.error.Message;
  throw errResponse;
}

// เพิ่ม header
private appendHeaders(accessToken:any) {
  // const headers = {};
  // if (accessToken) {
  //   headers['Authorization'] = `Bearer ${accessToken}`
  // };
  let options  = {};
  if (accessToken) {
    const header = new Headers({ 'Authorization': `Bearer ${accessToken}` });
    options = { headers: header,};
  };
  return new HttpHeaders(options);
}
}
