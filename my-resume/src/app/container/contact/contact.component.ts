import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  emailId : string = "shivam.bhargava7@example.com";

}
