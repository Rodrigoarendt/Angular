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
  public imgSrc: string ="https://mundoconectado.com.br/uploads/chamadas/ia-consciencia-chamada.jpg";
  public imgTitle: string = "Property Binding"
  constructor() { }

  ngOnInit(): void {

  }
}
