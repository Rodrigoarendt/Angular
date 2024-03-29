import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public date:Date = new Date();

  public list: Array<{ nome: string, idade:number}> = [
    { nome: "Rodrigo Arendt", idade: 36},
    { nome: "Realda Arendt", idade: 30},
    { nome: "Sofia Arendt", idade: 9},
    { nome: "Thassya Arendt", idade: 10}
  ];

  public nome: string = 'Rodrigo';
  constructor() { }

  ngOnInit(): void {

    setInterval( ()=>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)

  }

  public onClick(){
    if(this.condition){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade: 31});
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

}
