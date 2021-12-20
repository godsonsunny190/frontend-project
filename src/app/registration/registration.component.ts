import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { RegistrationService} from '../shared/registration.service';
import {Registration} from '../shared/registration.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {



  constructor(public regservices:RegistrationService) { }

  ngOnInit(){
this.resetForm()
  }
  resetForm(form?:NgForm){
     if(form)
     form.reset()
     this.regservices.selectedregister={ _id:"",name:"",surename:"",email:'',number:null,password:""}
    
  }
  
  register(form: NgForm){
    if (form.value.id==""){
      this.regservices.postregister(form.value).subscribe((res)=>{
        this.resetForm(form)
      })
    }
 else{
  this.regservices.postForm(form.value).subscribe((res)=>{
    this.resetForm(form)
  })
 }
}

viewList(){
  this.regservices.userslist().subscribe((res)=>{
    this.regservices.login =res as Registration[];
  })
}

// Editing data from registration form//
edit(data:Registration){
 this.regservices.selectedregister=data
}

delete(_id:string,formdata:NgForm){
  this.regservices.deleteusers(_id).subscribe((res)=>{
    this.resetForm(formdata)
    this.viewList()
  })
}



  


}


