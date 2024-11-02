import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private tcgService: TcgService) {}

  buscarProducto(): void {
    console.log(this.productoNombre);
    
    this.tcgService.getProductoByNombre(this.productoNombre).subscribe(
      (data: any) => {
        console.log(data);
        
        this.producto = data[0];
        Swal.fire({
          title: 'Producto encontrado',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.isCantidadReadonly = false;
      },
      (error) => {
        this.productoNombre = ''; // Limpia el campo productoNombre
        this.producto = null; // Limpia el objeto producto
        Swal.fire({
          title: 'Producto no encontrado',
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
