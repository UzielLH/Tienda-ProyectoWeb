import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {
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
