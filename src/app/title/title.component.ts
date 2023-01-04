import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem Vindo";

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    alert("foi alterado com sucesso");

  }
}
