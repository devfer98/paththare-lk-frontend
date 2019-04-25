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
    let id=this.route.snapshot.paramMap.get('id');
    this.productId=id;
    this.http.get('/l/product/'+id)
      .subscribe((response : any)=>{
        this.name= response.name;
        this.category= response.category;
        console.log(response);
        console.log(response[0]);
      });
  }

}
