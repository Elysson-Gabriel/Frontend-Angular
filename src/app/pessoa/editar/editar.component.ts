import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Pessoa } from 'src/app/Model/Pessoa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }
  editar() {
    const id = localStorage.getItem('id');
    this.service.getPessoaId(+id).subscribe(data => {
      this.pessoa = data;
    });
  }
  salvar() {
    this.service.editarPessoa(this.pessoa).subscribe(data => {
      this.pessoa = data;
      Swal.fire(
        '',
        'Atualizado com sucesso!',
        'success'
      );
      this.router.navigate(['consultar']);
    });
  }

}
