import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  standalone: true,
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
  imports: [NgIf]
})

export class ClientCreateComponent {
  client={
    name:'',
    email:'',
    address:'',
    password:'',
    repeat:'',
  
  }

  clients: {name:string; email:string; address:string;password:string;repeat:string}[]=[];
  errorMessage: string='';
  
  constructor(private router: Router) {}


  onSubmit(event: Event) {
    event.preventDefault();
    if (this.client.password !== this.client.repeat) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    console.log('Client created:',this.client);
  
    this.router.navigateByUrl("./meeting-Schedule/meeting-schedule.component.ts")


const newClient ={
  name:this.client.name,
  email:this.client.email,
  address:this.client.address,
  password:this.client.password,
  repeat: this.client.repeat
}






this.clients.push({ ...this.client});
this.client = {
  name:'',
  email:'',
  address:'',
  password:'',
  repeat:''
};
this.errorMessage='';



}

}
