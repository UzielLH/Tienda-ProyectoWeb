import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarproducto',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registrarproducto.component.html',
  styleUrl: './registrarproducto.component.css'
})
export class RegistrarproductoComponent {
  producto: any = {};  // Inicializa un objeto para almacenar los datos del producto

  constructor(private tcgService: TcgService) {}  // Inyecta el servicio

  onBuscarClickSucess(): void {
    this.tcgService.createProducto(this.producto).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Registro exitoso',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        // Opcional: limpiar el formulario después de registrar
        this.producto = {};
      },
      error: (error) => {
        Swal.fire({
          title: 'Registro fallido',
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      }
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
