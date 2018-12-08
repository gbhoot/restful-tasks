import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Oberservable and provide the code we would
    // like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks", data));
    return this._http.get('/tasks');
  }
  getOne(tid: string) {
    return this._http.get('/tasks/'+ tid);
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