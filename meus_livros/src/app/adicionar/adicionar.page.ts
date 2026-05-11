import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
  standalone: false
})

export class AdicionarPage {
  // Variável que controla a exibição (começa como false porque o padrão é 'nao-leu')
  foiLido: boolean = false;

  constructor() {}

  statusChange(event: any) {
    // Se o valor selecionado for 'leu', a variável fica true
    this.foiLido = event.detail.value === 'leu';
  }
}