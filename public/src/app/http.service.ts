import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    this.updateOne();
    this.getOne();
    // this.deleteOne();
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Oberservable and provide the code we would
    // like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks", data));
  }
  getOne() {
    let tempObservable = this._http.get('/tasks/5c09aced4eea35211cca8bec');
    tempObservable.subscribe(data => console.log("Got this one task: ", data));
  }
  // deleteOne() {
  //   let tempObservable = this._http.delete('/tasks/:id');
  //   tempObservable.subscribe(data => console.log("Deleted a task, ", data));
  // }
  updateOne() {
    let tempObservable = this._http.put('/tasks/5c09aced4eea35211cca8bec', {
      completed: false
    });
    tempObservable.subscribe(data => console.log("Updated a task, ", data));
  }
}