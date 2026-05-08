import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public nomeInstituto: string;

  constructor() {
    this.nomeInstituto = 'Instituto Politécnico de Viana do Castelo';
  }

}
