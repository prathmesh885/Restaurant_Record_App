import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AkService } from '../ak.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:any;
  email:any;
  pass:any;
  
  obj:any={
    name:"",
    email:"",
    pass:""
  };

  obj2:any={
    name:'',
    email:''
  };
  down:any=false;
  up:any=true;
  constructor(private http:HttpClient) { }
  login(){

    
    console.log("fsdfldj");
    let url="http://localhost:1111/user/signin"
    this.http.post(url,{
      email:this.email,
      pass:this.pass
    }).toPromise().then((data:any)=>{
      console.log(data);
      this.obj2.name=data.name;
      this.obj2.email=data.email;
      // this.obj.pass=data.user.pass
      // console.log(this.obj);
      console.log(this.obj2);
      
    }) 
    if(this.obj2.name == ''){
      return;
    }else{
      this.down=true;
      this.up=false;
    }
    

  }
  logout(){
    this.up=true;
    this.down=false;
  }
  ngOnInit(): void {
  }

}
