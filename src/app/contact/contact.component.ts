import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactRef = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    issue: new FormControl(),
  })
  resultMessage: string = ""
  contact?: Array<Contact>;

  idVar: boolean = false;

  buttonValue: string = "Store Contact";

  constructor(public cser: ContactService) {
    console.log("constructor called..")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.cser.retreiveContactDetails().subscribe(result => this.contact = result);
  }

  retreiveContact() {

  }

  storeContact() {
    
    if (this.buttonValue == "Store Contact") {

      let contact = this.contactRef.value;
      this.cser.storeContactDetails(contact).subscribe(result => {
        this.resultMessage = "Your request has been sent, our team will get back with you soon!"
        this.cser.retreiveContactDetails().subscribe(result => this.contact = result);
      }, error => {
        this.resultMessage = "Something went wrong, have you filled out the form correctly?";
      })

    } else {
      
      let contact = this.contactRef.value;
      this.cser.updateContactDetails(contact).subscribe(result => {
        this.resultMessage = "Your request has been sent, our team will get back with you soon!"
        this.cser.retreiveContactDetails().subscribe(result => this.contact = result);
        this.idVar = false;
        this.buttonValue = "Store Rec";
      })
    }

    this.contactRef.reset();
  }

}