import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick: boolean = true;
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

}
