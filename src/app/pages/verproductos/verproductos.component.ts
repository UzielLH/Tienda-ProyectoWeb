import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verproductos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './verproductos.component.html',
  styleUrl: './verproductos.component.css'
})
export class VerproductosComponent {
  onBuscarClickSucess(): void {
    Swal.fire({
      title: 'Borrado exitoso',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }
}
