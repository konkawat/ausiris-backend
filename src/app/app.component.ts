import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MarketfeedsService } from './services/marketfeeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ausiris-backend';
  feeds:any;
  askspot:string = '';
  //options: string[] = ['One', 'Two', 'Three'];
  //loading!:boolean;

  constructor(private app: AppService,private feedService: MarketfeedsService) {
    //this.app.getLoading.subscribe(loading => this.loading = loading);
  }

  get loading(){
    return this.app.getLoading;
  }

  ngOnInit(): void {
    // this.feedService.listen('marketprice')
    // .subscribe((data) =>{
    //   this.feeds = data;
    //   this.askspot = this.feeds['AskSpot'];
    //   console.log(this.feeds['AskSpot']);
    //   // debugger;
    //   //item : = data;
    //   //this.p = data[0]['AskSpot']
    // })
  }

}
