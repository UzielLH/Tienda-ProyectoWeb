import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Importa Router
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

  constructor(private tcgService: TcgService, private router: Router) {}  // Inyecta Router aquí

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
      title: 'Acción cancelada',
      icon: 'warning',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      this.router.navigate(['/home']); // Redirige a la página de inicio
    });
  }
}
