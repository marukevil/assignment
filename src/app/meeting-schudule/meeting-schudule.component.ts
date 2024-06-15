import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-schudule',
  standalone:true,
  templateUrl: './meeting-schudule.component.html',
  styleUrls: ['./meeting-schudule.component.css']
})
export class MeetingSchuduleComponent {
  meeting = {
    meetingTopic: '',
    numberOfPeople: '',
    meetingTime: ''
  };

  meetings: any[] = [];
  errorMessage = '';

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.meeting.meetingTopic && this.meeting.numberOfPeople && this.meeting.meetingTime) {
      const newMeeting = { ...this.meeting };
      this.meetings.push(newMeeting);
      this.meeting = {
        meetingTopic: '',
        numberOfPeople: '',
        meetingTime: ''
      };
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}