import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private accessKey = 'accessToken';
    
  // set access token in browser memory
  setAuthenticated(accessToken: string){
      localStorage.setItem(this.accessKey, accessToken);
  }

  // get access token in browser memory
  getAuthenticated(): string {
    return localStorage.getItem(this.accessKey) || "";
  }

  // clear access token in browser memory
  clearAuthenticated(): void {
      localStorage.removeItem(this.accessKey);
  }
}
