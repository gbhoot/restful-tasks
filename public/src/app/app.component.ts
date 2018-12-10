import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // title = 'Restful Tasks API';
  getHideTasksBtn: string = "GET ALL TASKS";
  addNmTasksBtn: string = "ADD NEW TASK";
  tasks = [];
  showAll: boolean = false;
  showNew: boolean = false;
  editing: boolean = false;
  taskEdit = {};
  taskNew = {};
  tidEdit: string = "";
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
      this.editing = false;
      this.getHideTasksBtn = "GET ALL TASKS";
    } else {
      this.showAll = true;
      this.getHideTasksBtn = "HIDE ALL TASKS";
    }
  }

  newTaskBtnPressed(): void {
    if (this.showNew) {
      this.showNew = false;
      this.taskNew = {};
      this.addNmTasksBtn = "ADD NEW TASK"
    } else {
      this.showNew = true;
      this.addNmTasksBtn = "NEVERMIND"
    }
  }

  createTaskBtnPressed(): void {
    console.log(this.taskNew);
    let observable = this._httpService.createOne(this.taskNew);
    observable.subscribe(data => {
      this.showAll = true;
      this.newTaskBtnPressed();
      this.getAllTasks()
    });
  }

  deleteTaskBtnPressed(tid: string): void {
    console.log(tid);
    let observable = this._httpService.deleteOne(tid)
    observable.subscribe(data => {
      console.log(data);
      this.showAll = true;
      this.getAllTasks();
    });
  }

  editTaskBtnPressed(tid: string): void {
    if (!this.editing || tid != this.tidEdit) {
      this.tidEdit = tid;
      let observable = this._httpService.getOne(tid);
      observable.subscribe(data => {
        this.taskEdit = data['task'];
        this.editing = true;
      });
    } else {
      this.taskEdit = {};
      this.editing = false;
    }
  }

  updateTaskBtnPressed(tid: string): void {
    let observable = this._httpService.updateOne(tid, this.taskEdit);
    observable.subscribe(data => {
      this.editTaskBtnPressed(tid);
      this.showAll = true;
      this.getAllTasks();
    });
  }
}
