import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
    console.log(this.valueoption);
  }

}
