import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient) { }
  
  storeContactDetails(contact: any): Observable<Contact>{
    return this.http.post<Contact>("http://localhost:3000/contact",contact)
  }

  retreiveContactDetails():Observable<Contact[]> {
  return this.http.get<Contact[]>("http://localhost:3000/contact") 
  }
  
  updateContactDetails(contact:any):Observable<Contact>{
  return this.http.put<Contact>("http://localhost:3000/Contact/"+contact.id,contact);
  }
  
}
