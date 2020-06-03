import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public fullname: '';
  public meetingdate = '';
  public starttime = '';
  public endtime = '';
  public DeData = '';
  public EnData = '';
  title = 'data-binding';

  onSubmit() {
    const Data = {
      FullName: this.fullname,
      MeetingDate: this.meetingdate,
      StartTime: this.starttime,
      EndTime: this.endtime,
    };
    this.EnData = CryptoJS.AES.encrypt(
      JSON.stringify(Data),
      'qwertyui'
    ).toString();

    const i = Math.random();
    const id = 'id' + i;
    localStorage.setItem(id, this.EnData);
    this.DeData = localStorage.getItem(id);
    const bytes = CryptoJS.AES.decrypt(this.DeData, 'qwertyui');
    if (bytes.toString()) {
      this.DeData = bytes.toString(CryptoJS.enc.Utf8);
    }
  }
}
