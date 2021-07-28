import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { TestimonialformComponent } from '../testimonialform/testimonialform.component';
import { TestService } from '../test.service';

import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'ngx-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  

    testimonials={
      name:"",
      position:"",
      organization:"",
      testimonial:"",
      course_title:"",
      Image:""
    }
  
    constructor(private windowService:NbWindowService,private testService:TestService,private router:Router,private route: ActivatedRoute ) { }
    
  
    ngOnInit(): void {
  
        this.testService.gettestimonials().subscribe((data)=>{
        this.testimonials=JSON.parse(JSON.stringify(data));
      })
    }
  addTestimonial(){
    this.windowService.open(TestimonialformComponent, { title: 'Add testimonial'});
  }
 

  }