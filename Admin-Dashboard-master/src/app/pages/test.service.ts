import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private http:HttpClient) { }

  item={
    name:"",
    position:"",
    organization:"",
    testimonial:"",
    course_title:"",
    image:""

  }

  
  
  gettestimonials(){
    return this.http.get("http://localhost:1111/testimonials");
  }

  newTestimonial(image:any,item:any)
  {   

    // console.log('inside service upload')
    // console.log(item);
    // const formData = new FormData();
    // // formData.append('file', image);  
    // formData.append('name', item.name); 
    // // formData.append('position', item.position); 
    // // formData.append('organization', item.organization); 
    // // formData.append('image', item.image); 
    console.log(item);
    return this.http.post("http://localhost:5000/insert",item)
    .subscribe(data =>{console.log(data)})
  }
  
  

  }


