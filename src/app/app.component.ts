import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
  -->
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributo</h1>
    <hr>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Rodrigo Arendt</h1>
    <hr>
  </app-diretivas-atributos>-->

  <!--
   <app-new-component></app-new-component>-->


   <app-output></app-output>
   <router-outlet></router-outlet>

  `,

})
export class AppComponent implements OnInit {

  public destruir = true;

  public addValue: number = 0;

  constructor() {

  }

  ngOnInit(): void { }

  public add() {
    this.addValue += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

}
