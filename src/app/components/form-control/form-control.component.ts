import { Component } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {
  titulo = 'Registro de usuario';
  mensaje = "";
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  cargo:string="";
  correo:string="";


    registrarUsuraio(){

      this.registrado= true;
    this.mensaje="usuario registrado con existo";

    }

}
