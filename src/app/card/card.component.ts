import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  task:Task[] = [];
  task2:Task[] = [];
  task3:Task[] = [];
  valueoption: any;
  sendform: FormGroup;
  constructor(private formbuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.sendform = this.formbuilder.group({
    send: ['']
  })
  }


  send(){
    this.valueoption = this.sendform.value.send;
    this.task.push({id: this.task.length+1, name: this.valueoption});
    this.sendform.reset();
  }

  nextState(id:number){
    console.log(id);
  }

  prevState(id:number){
  }

  doing(taskvalue:Task){
    const index = this.task.indexOf(taskvalue);
    this.task.splice(index,1);
    this.task2.push(taskvalue);
  }

  todo(taskvalue:Task){
    const index = this.task2.indexOf(taskvalue);
    this.task2.splice(index,1);
    this.task.push(taskvalue);
  }

  done(taskvalue:Task){
    // console.log(this.task2)
    // console.log(this.task3)
    console.log(taskvalue);
    const index = this.task2.indexOf(taskvalue);
    this.task2.splice(index,1);
    console.log(taskvalue);
    // console.log(this.task2)
    // console.log(this.task3)
    this.task3.push(taskvalue);
  }

  doing2(taskvalue:Task){
    const index = this.task3.indexOf(taskvalue);
    this.task3.splice(index,1);
    this.task2.push(taskvalue);
  }
}
