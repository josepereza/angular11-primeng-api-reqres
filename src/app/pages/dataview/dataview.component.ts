import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import {Usuario} from '../../models/usuario'
@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {
  usuarios:Usuario[]=[];

  constructor(public usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuarios().subscribe(usuarios=>{
      console.log('otros usuarios',usuarios)
      this.usuarios=usuarios;
    })
  }


}
