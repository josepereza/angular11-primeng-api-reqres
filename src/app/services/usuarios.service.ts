import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ReqResResponse } from '../models/reqres-response';
import {Usuario} from '../models/usuario'
import {map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http:HttpClient) {
    
   }
   cargarUsuarios(){
    const url='https://reqres.in/api/users';
    return this.http.get<ReqResResponse>(url)
    .pipe(map(resp=>{
      return resp.data.map(user=>{
        return new Usuario(user.id, user.email, user.first_name, user.last_name, user.avatar)

      })
    }))
   }
}
