import { Router, RouterModule } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferencia');
    const valorEmitir: Transferencia = { valor:this.valor, destino:this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.log(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
