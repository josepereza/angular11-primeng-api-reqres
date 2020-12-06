import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import {Usuario} from '../../models/usuario'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:Usuario[]=[];
  constructor(public usuarioService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuarios().subscribe(usuarios=>{
      console.log(usuarios)
      this.usuarios=usuarios;
    })
  }

}
