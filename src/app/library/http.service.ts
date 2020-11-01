import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const localhostUrl  = "http://localhost:8090";
@Injectable({
  providedIn:'root'
})
export class SchoolingHttpService {
  constructor(private http: HttpClient) { }

  getRequestOptions(headers?: HttpHeaders):HttpHeaders{
    if(headers==null){
      headers= new HttpHeaders;
    }
return headers.append("Access-Control-Allow-Origin","true");
  }


  get(url:any,data?:{}) {
    //let header :HttpHeaders =this.getRequestOptions(options);
    return this.http.get(this.getEndpointUrl(url),{params:data});
  }

  post(url:any,data={}){
    return this.http.post(this.getEndpointUrl(url),data);
  }

  put(url:any,data={},options?:HttpHeaders){
    let header :HttpHeaders =this.getRequestOptions(options);
    return this.http.put(this.getEndpointUrl(url),data,{headers:header});
  }

  getEndpointUrl(endpoint:String){
    return localhostUrl +endpoint;
  }


}