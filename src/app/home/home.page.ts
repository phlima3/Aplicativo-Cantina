import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdHotdog: number = 0;
  qtdRefri: number = 0;
  qtdBala: number = 0;
  qtdChocolate: number = 0;
  resultado: number = 0;

  constructor() {}
calcularTotal(){
    this.resultado = this.qtdHotdog *5;
    this.resultado += this.qtdRefri *3.5;
    this.resultado += this.qtdBala *0.25;
    this.resultado += this.qtdChocolate *2;
  }
  addHotdog() {
    this.qtdHotdog++;
    this.calcularTotal();
  }
  delHotdog(){
    if(this.qtdHotdog > 0)
    this.qtdHotdog--;
    this.calcularTotal();
  }

  addRefri(){
    this.qtdRefri++;
    this.calcularTotal();

  }
  delRefri(){
    if(this.qtdRefri >0)
    this.qtdRefri--
    this.calcularTotal();

  }

  addBala(){
    this.qtdBala++;
    this.calcularTotal();
    
  }
  delBala(){
    if(this.qtdBala > 0)
    this.qtdBala--;
    this.calcularTotal();

  }
  addChocolate(){
    this.qtdChocolate++;
    this.calcularTotal();
    
  }
  delChocolate(){
    if(this.qtdChocolate > 0)
    this.qtdChocolate--;
    
  }
  limpar(){
    this.qtdBala=0;
    this.qtdChocolate=0;
    this.qtdHotdog=0;
    this.qtdRefri=0;
    this.resultado=0;
  }
  
  
}
