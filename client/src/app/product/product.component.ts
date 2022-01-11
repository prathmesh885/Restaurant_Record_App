import { Component, OnInit } from '@angular/core';
import { AkService } from '../ak.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  rid:any;
  rname:any;
  emaill:any;
  cdate:any;
  mnumber:any;
  addrss:any;
  servi:any;

  id={
    _id: '',
    restaurantId: '',
    restaurantName: '',
    email: '',
    mobileNumber:'',
    address:'',
    service:''
  };

  checkAdd=false;
  checkEdit=false;
  userObj={
    restaurantId: '',
    restaurantName: '',
    email: '',
    mobileNumber:'',
    address:'',
    service:'',
  };
  crud:any; 
  down:any=false;
  up:any=true;
  constructor(private user:AkService){
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.crud=data;
      console.log(this.crud);
      
    })
  }
  addNewelement(){
    this.checkAdd=true;
  }

  add(){
   console.log(this.rid);
   this.userObj.restaurantId=this.rid
   this.userObj.restaurantName=this.rname
   this.userObj.email=this.emaill
   this.userObj.mobileNumber=this.mnumber
   this.userObj.address=this.addrss
   this.userObj.service=this.servi

    // console.log(this.userObj);

  this.user.addproduct(this.userObj).subscribe(data=>{
    console.log(data);
    // this.crud=data;
  })
  location.reload();
  }

  edit(item){

    console.log(item);
    
    this.checkEdit=true;
    this.id._id=item._id;
    this.id.restaurantId=item.restaurantId;
    this.id.restaurantName=item.restaurantName;
    this.id.email=item.email;
    this.id.mobileNumber=item.mobileNumber;
    this.id.address=item.address;
    this.id.service=item.service;
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
  // logout(){
  //   this.up=true;
  //   this.down=false;
  // }
  ngOnInit(): void {
  }


}
