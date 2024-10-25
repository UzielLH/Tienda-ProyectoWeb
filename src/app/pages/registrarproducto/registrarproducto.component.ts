import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarproducto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registrarproducto.component.html',
  styleUrl: './registrarproducto.component.css'
})
export class RegistrarproductoComponent {
  onBuscarClickSucess(): void {
    Swal.fire({
      title: 'Registro exitoso',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }
  onBuscarClickFailed(): void {
    Swal.fire({
      title: 'Registro fallido',
      icon: 'error',
      timer: 1500,
      showConfirmButton: false,
    });
  }
}
