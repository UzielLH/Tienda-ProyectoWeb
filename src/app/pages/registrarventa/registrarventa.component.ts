import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarventa',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registrarventa.component.html',
  styleUrl: './registrarventa.component.css'
})
export class RegistrarventaComponent {
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
