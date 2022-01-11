import { Component, OnInit } from '@angular/core';
import { AkService } from '../ak.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'contact';
  fname:string;
  lname:any;
  email:string;
  phone:any;
  short:any;


  id={
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    short:''
  };

  checkAdd=false;
  checkEdit=false;
  userObj={
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    short:''
  };
  crud:any;
  constructor(private user:AkService){
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.crud=data;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addNewelement(){
    this.checkAdd=true;
  }

  add(){
   console.log(this.fname);
   this.userObj.firstName=this.fname
   this.userObj.lastName=this.lname
   this.userObj.email=this.email
   this.userObj.phone=this.phone
   this.userObj.short=this.short
    // console.log(this.userObj);

  this.user.createData(this.userObj).subscribe(data=>{
    console.log(data);
    // this.crud=data;
  })
  location.reload();
  }

  edit(item){

    console.log(item);
    
    this.checkEdit=true;
    this.id._id=item._id;
    this.id.firstName=item.firstName;
    this.id.lastName=item.lastName;
    this.id.email=item.email;
    this.id.phone=item.phone;
    this.id.short=item.short;
  }

  update(){
    console.log(this.id)
    this.user.updateData(this.id).subscribe(data=>{
      console.log(data);
    });
    location.reload();
  }

  delete(id){
    console.log(id);
    this.user.deleteData(id).subscribe(data=>{
      console.log(data);
      location.reload();
    })
  }

}
