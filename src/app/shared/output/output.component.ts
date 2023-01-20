import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();


  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Rodrigo Arendt", idade: 36 },
    { nome: "Realda Arendt", idade: 31 },
    { nome: "Thassya Arendt", idade: 10 },
    { nome: "Sofia Arendt", idade: 9 },

  ]
  constructor() { }

  ngOnInit(): void {

  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
