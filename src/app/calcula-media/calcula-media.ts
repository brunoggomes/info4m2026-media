import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, 
         Validators } from '@angular/forms';

@Component({
  selector: 'app-calcula-media',
  imports: [ReactiveFormsModule],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined
  //O serviço FormBuilder facilita a configuração do form Group
  //# - atributo privado em tempo de compilação e execução
  #formBuilder = inject(FormBuilder);
  protected formMedia: FormGroup;

  constructor() {
    this.formMedia = this.#formBuilder.group(
    {
      bim1: [undefined, [Validators.required, 
                         Validators.min(0), 
                         Validators.max(100)]],
      bim2: [undefined, [Validators.required, 
                         Validators.min(0), 
                         Validators.max(100)]],
      bim3: [undefined, [Validators.required,
                         Validators.min(0), 
                         Validators.max(100)]],
      bim4: [undefined, [Validators.required,
                         Validators.min(0), 
                         Validators.max(100)]],
    })

    this.mediaParcial = undefined
    this.mediaFinal = undefined

  }
  
  calcularMediaParcial() {
      const notas = this.formMedia.value

      this.mediaParcial = 
        (notas.bim1 * 2 + notas.bim2 * 2 + 
         notas.bim3 * 3 + notas.bim4 * 3) / 10
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
