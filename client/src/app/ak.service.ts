import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AkService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getname(): any {
    throw new Error('Method not implemented.');
  }
  isLoggedIn //localhost:3000/product";
    () {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  login1(user:any){
    let url="http://localhost:3000/login/";
    return this.http.post(url,user)
  }
  signup(user:any){
    let url="http://localhost:3000/signup/";
    return this.http.post(url,user)
  }
  getData(){
    // let url = "https://restcountries.eu/rest/v2/name/india";
    let url = "http://localhost:1111/prod/show";
    return this.http.get(url);
  }

  productData(){
    let url = "http://localhost:3000/product";
    return this.http.get(url);
  }


  deleteProduct(id){
    let url = `http://localhost:3000/pdelete/${id}`
    return this.http.get(url);
  }
  createData(user){
    let url = `http://localhost:3000/create/`
    return this.http.post(url, user);
  }
 
  updateProcuct(user){
    let url = `http://localhost:3000/pupdate/${user._id}`
    return this.http.put(url, user);
  }
  login(logindata: any) {
    return this.http.post(
      'http://localhost:3000/api/login',
      logindata,
      this.httpHeader
    );
    }
    signin(registerdata: any) {
      return this.http.post(
        'http://localhost:3000/api/register',
        registerdata,
        this.httpHeader
      );
    }

    addproduct(user:any){
      let url="http://localhost:1111/prod/product/";
      return this.http.post(url,user)
    }
    addData(user:any){
      let url="http://localhost:1111/user/register/";
      return this.http.post(url,user)
    }
    deleteData(id){
      let url = `http://localhost:1111/prod/delete/${id}`
      return this.http.delete(url);
    }
    updateData(obj){
      let url=`http://localhost:1111/prod/update/${obj._id}`;
      return this.http.patch(url,obj);
    }
}
