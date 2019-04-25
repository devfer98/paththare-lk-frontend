import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl,Validators,FormBuilder}from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regResult:String;
  selection:String="1";
  itemTypes = [{'id':1, 'type':'Customer'}, {'id':2, 'type': 'Promoter'}];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  choice(code){
    this.selection=code;
  }

  regCustomer(){
    this.http.post('/l/regCustomer',this.customerForm.value,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
      .subscribe((Response)=>{
        //console.log(Response);
        this.regResult=JSON.stringify(Response);
        console.log(Response);
      })
  }

  addDVD(){
    this.http.post('/l/addDVD',this.addDVDForm.value,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .subscribe((Response)=>{
      this.regResult=JSON.stringify(Response);
      console.log(Response);
    })
  }
  
  customerForm=new FormGroup({
    fName: new FormControl("",Validators.required),
    lName: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    phoneNo: new FormControl("",Validators.required)
  })

  addDVDForm=new FormGroup({
    isbn: new FormControl("",Validators.required),
    title: new FormControl("",Validators.required),
    sector: new FormControl("",Validators.required),
    publicationDate: new FormControl("",Validators.required),
    language: new FormControl("",Validators.required),
    subtitle: new FormControl(),
    producer: new FormControl("",Validators.required),
    actor: new FormControl("",Validators.required)
  })

}
