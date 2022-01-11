import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AkService } from '../ak.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:any;
  email:any;
  pass:any;
  copass:any;
  obj={
    name:'',
    email:'',
    pass:'',
    copass:''
  }
  constructor(private user:AkService,public router:Router,route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    // this.router.navigate(['/login'])
    // this.router.navigate(['/dashboard'])
     console.log(this.name);
     this.obj.name=this.name,
     this.obj.email=this.email,
     this.obj.pass=this.pass
     this.obj.copass=this.copass

     this.user.addData(this.obj).subscribe(data=>{
       console.log("Data transfer is successful!");
       
     })
  }
}
