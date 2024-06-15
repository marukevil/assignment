import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { MeetingSchuduleComponent } from './meeting-schudule/meeting-schudule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientCreateComponent,MeetingSchuduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';


}

