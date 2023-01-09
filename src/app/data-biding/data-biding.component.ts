import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Rodrigo";
  public idade: number = 36;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://mundoconectado.com.br/uploads/chamadas/ia-consciencia-chamada.jpg";
  public imgTitle: string = "Property Binding"

  public position: { x: number, y: number } = { x: 0, y: 0 };
  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetX;
  }
}
