import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-affiliate-link',
  templateUrl: './affiliate-link.component.html',
  styleUrls: ['./affiliate-link.component.css']
})
export class AffiliateLinkComponent implements OnInit {

  link:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getLink(){
    this.http.get('/l/affiliate')
    .subscribe((Response)=>{
      this.link=Response;
      console.log(this.link);

    })
  }

}
