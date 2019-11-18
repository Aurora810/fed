import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenti',
  templateUrl: './componenti.component.html',
  styleUrls: ['./componenti.component.css']
})
export class ComponentiComponent implements OnInit {
  namesBlue: string[];
  namesRed: string[];
  namesGreen: string[];
  namesYellow: string[];
  constructor() {
    this.namesBlue = ['Aurora', 'Marianna', 'Luca'];
    this.namesRed = ['Greta', 'Alberto', 'Maurizio'];
    this.namesYellow = ['Roberta', 'Jacopo', 'Marco'];
    this.namesGreen = ['Nadia', 'Marco', 'Yun', 'Nigel'];
  }

  ngOnInit() {
  }

 
}
