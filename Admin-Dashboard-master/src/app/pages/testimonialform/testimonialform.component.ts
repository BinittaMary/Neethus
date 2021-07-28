import { Component, OnInit } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TestService } from '../test.service';
import { ActivatedRoute,Router } from '@angular/router';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";


@Component({
  selector: 'ngx-testimonialform',
  templateUrl: './testimonialform.component.html',
  styleUrls: ['./testimonialform.component.scss']
})
export class TestimonialformComponent implements OnInit {
  
 images:any;

    testimonialDetails={
      name:"",
      position:"",
      organization:"",
      testimonial:"",
      course_title:"",
      image:""
  
    }
  
   constructor(private testService:TestService,private router:Router,private route: ActivatedRoute) { }
    ngOnInit(): void {
    }
    addTestimonial(){
      this.testimonialDetails.image = this.testimonialDetails.image.replace('C:\\fakepath\\','');
      this.testService.newTestimonial(this.images,this.testimonialDetails);
      console.log(`upload image ${this.images}`);
      console.log("called");
      alert("success")
      this.router.navigate(['pages/testimonials'])
    }
   
    selectImage(event : any) {
      console.log('select image')
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.images = file;
        console.log('inside if event')
      }
    }
  
  




    deleteTestimonial(testimonial : any){}

    editTestimonial(testimonial : any){}

    viewTestimonial(testimonial : any){}
  
  
  
  
  }
