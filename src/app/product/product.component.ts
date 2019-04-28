import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productId;
  public name;
  public category;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.productId=this.route.snapshot.paramMap.get('id');;
    this.http.get('/l/product/'+this.productId)
      .subscribe((response : any)=>{
        this.name= response.name;
        this.category= response.category;
        console.log(response);
        console.log(response[0]);
      });
    this.setCookie('productId',this.productId,30);
  }

  setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d['toGMTString']();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
}
