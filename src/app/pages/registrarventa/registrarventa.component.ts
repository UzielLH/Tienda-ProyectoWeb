import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrarventa',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registrarventa.component.html',
  styleUrl: './registrarventa.component.css'
})
export class RegistrarventaComponent {
  productoNombre: string = '';
  producto: any = {};
  cantidadComprar: number | null = null;
  total: number = 0;
  isCantidadReadonly: boolean = true;
  fecha: string = '';

  constructor(private tcgService: TcgService, private router: Router) {}

  buscarProducto(): void {
    console.log(this.productoNombre);
    
    this.tcgService.getProductoByNombre(this.productoNombre).subscribe(
      (data: any) => {
        console.log(data);
        
        if (data && data.length > 0) {
          this.producto = data[0];
          Swal.fire({
            title: 'Producto encontrado',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          this.isCantidadReadonly = false;
        } else {
          this.productoNombre = ''; // Limpia el campo productoNombre
          this.producto = null; // Limpia el objeto producto
          Swal.fire({
            title: 'Producto no encontrado',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      },
      (error) => {
        this.productoNombre = ''; // Limpia el campo productoNombre
        this.producto = null; // Limpia el objeto producto
        Swal.fire({
          title: 'Error al buscar el producto',
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    );
  }

  limpiarCampos(): void {
    this.productoNombre = '';
    this.producto = null;
    this.cantidadComprar = null;
    this.total = 0;
    this.fecha = '';
    this.isCantidadReadonly = true;
  }

  validarCantidad(): void {
    console.log(this.producto, this.cantidadComprar);
    
    if (
      this.cantidadComprar !== null &&
      this.cantidadComprar > 0 &&
      this.cantidadComprar <= this.producto.cantidad
    ) {
      console.log('Cantidad válida');
      this.total = this.cantidadComprar * this.producto.precioVenta;
      console.log(this.total);
    } else {
      console.log('Cantidad no válida');
      this.total = 0;
      Swal.fire({
        title: 'Cantidad no válida',
        icon: 'warning',
        toast: true,
        text: `Solo hay ${this.producto.cantidad} en existencia.`,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }

  registrarVenta(): void {
    // Validar que todos los campos estén completos
    if (!this.producto || !this.fecha || !this.cantidadComprar || this.total <= 0) {
      Swal.fire({
        title: 'Datos incompletos',
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    const venta = {
      producto_id: this.producto.id,
      fecha: this.fecha,
      cantidad: this.cantidadComprar,
      total: this.total
    };

    this.tcgService.createVenta(venta).subscribe(
      (response) => {
        console.log(response);
        Swal.fire({
          title: 'Registro exitoso',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.limpiarCampos();
      },
      (error) => {
        console.error(error);
        Swal.fire({
          title: 'Error al registrar la venta',
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    );
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
