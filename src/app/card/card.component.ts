import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public taks:Array<any> = [
    {id: 1, name: 'Lavar louça'},
    {id: 2, name: 'Estudar'},
    {id: 3, name: 'Fazer Feira'},
  ];

  valueoption: any;
  sendform: FormGroup;
  constructor(private formbuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    console.log(this.taks);
    this.sendform = this.formbuilder.group({
    send: ['']
  })
  }


  send(){
    this.valueoption = this.sendform.value.send;
    this.taks.push({id: this.taks.length, name: this.valueoption});
    this.sendform.reset();
  }

}
