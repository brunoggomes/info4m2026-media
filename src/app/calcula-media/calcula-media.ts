import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined
  
  constructor() {
    this.mediaParcial = undefined
    this.mediaFinal = undefined
  }
  

  calcularMediaParcial(b1: number, b2: number, 
                       b3: number, b4: number) {
      this.mediaParcial = 
        (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }


  /** Calcula a média final da disciplina caso o(a) estudante
   *  tenha ficado em avaliação final.
   * 
   *  @param naf nota da avaliação final
   */
  calcularMediaFinal(naf: number) {
    const mp = this.mediaParcial
    let mf: number | undefined = undefined
    if (mp) {
      mf = (mp + naf) / 2
    }
    this.mediaFinal = mf
  }
}
