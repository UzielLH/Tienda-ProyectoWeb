import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Importa Router
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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
    const { nombre, costo, precioVenta, cantidad } = this.producto;

    // Verificar si el nombre del producto ya está registrado
    this.tcgService.getProductoByNombre(nombre).subscribe({
      next: (existingProduct) => {
        if (existingProduct) {
          Swal.fire({
            title: 'Error',
            text: 'El nombre del producto ya está registrado.',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
          return; // Sale de la función si el producto existe
        }

        // Validaciones existentes
        if (costo < 0 || precioVenta < 0 || cantidad < 0) {
          Swal.fire({
            title: 'Error',
            text: 'No se aceptan números negativos.',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
          return;
        }

        if (costo > precioVenta) {
          Swal.fire({
            title: 'Error',
            text: 'El precio de venta no puede ser menor al costo.',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
          return;
        }

        // Crear el producto si todas las validaciones pasan
        this.tcgService.createProducto(this.producto).subscribe({
          next: (response) => {
            Swal.fire({
              title: 'Registro exitoso',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
            this.producto = {}; // Opcional: limpiar el formulario después de registrar
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
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Producto no encontrado, proceder con el registro
          // Validaciones existentes
          if (this.producto.costo < 0 || this.producto.precioVenta < 0 || this.producto.cantidad < 0) {
            Swal.fire({
              title: 'Error',
              text: 'No se aceptan números negativos.',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
            });
            return;
          }

          if (this.producto.costo > this.producto.precioVenta) {
            Swal.fire({
              title: 'Error',
              text: 'El precio de venta no puede ser menor al costo.',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
            });
            return;
          }

          // Crear el producto si todas las validaciones pasan
          this.tcgService.createProducto(this.producto).subscribe({
            next: (response) => {
              Swal.fire({
                title: 'Registro exitoso',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
              }).then(() => {
                this.router.navigate(['/verproductos']); // Navega a 'verproductos' después del registro
              });
              this.producto = {}; // Opcional: limpiar el formulario después de registrar
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
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al verificar el nombre del producto.',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        }
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
