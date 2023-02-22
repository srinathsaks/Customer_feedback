import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceCustomer } from '../service/service.customer';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})

export class CustomerFeedbackComponent {
  myForm: FormGroup;
  customer_feedback: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private serviceCustomer: ServiceCustomer) {
    
      this.customer_feedback = this.formBuilder.group({
        EmployeeId :['', Validators.required],
        Name: ['', Validators.required],
        Designation: ['', Validators.required],
        Department: ['', Validators.required],
        DOJ: ['', Validators.required],
        Address: ['', Validators.required],
        MobileNumber: ['', Validators.required]


      })
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      twoWayControl: [""]
    });
  }
  // customer_feedback = new FormGroup({
    
  // });
  service: any;
  onSubmit(){
    alert('Successfully Submitted!')
  }
  Ok(){
    alert('Successfully Submitted!')
  }

// print_invoice(user:any){
//   this.service.generatepdf(user).subscribe(res =>{
//     let blob:Blob = res.body as Blob;
//     let url = window.URL.createObjectURL(blob);
//     window.open(url)
//   });
// }
download_invoice(user:any){
  this.service.customer.generatepdf(user).subscribe(res =>{
    let blob:Blob = res.body as Blob;
    let url = window.URL.createObjectURL(blob);
    
    let a = document.createElement('a');
    a.download = user;
    a.href = url;
    a.click();
  });

}

}


