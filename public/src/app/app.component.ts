import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // title = 'Restful Tasks API';
  tasks = [];
  showAll: boolean = false;
  showInd: boolean = false;
  task = {};
  constructor(private _httpService: HttpService){}

  // ngOnInit will run when the component is initialized,
  // after the constructor method
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
    });
  }

  getBtnPressed() {
    if (this.showAll) {
      this.showAll = false;
    } else {
      this.showAll = true;
    }
  }

  showBtnPressed(event: any): void {
    let html = event['path'][0]
    let tid = html['id'];
    let observable = this._httpService.getOne(tid)
    observable.subscribe(data => {
      this.task = data['task'];
      this.showInd = true;
    });
  }
}
