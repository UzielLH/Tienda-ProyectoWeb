import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-verproductos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './verproductos.component.html',
  styleUrl: './verproductos.component.css'
})
export class VerproductosComponent implements OnInit {
  productos: any[] = []; // Arreglo para almacenar los productos

  constructor(private tcgService: TcgService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos(): void {
    this.tcgService.getAllproductos().subscribe(
      (data: any) => {
        console.log('Productos obtenidos:', data); // Verificar la respuesta
        this.productos = data; // Asignar los datos a la variable
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
  
  getProductByNombre(nombre: string): void {
    this.tcgService.getProductoByNombre(nombre).subscribe(
      (data: any) => {
        console.log('Producto encontrado:', data); // Verificar la respuesta
        this.productos = data; // Asignar los datos a la variable
      },
      (error) => {
        console.error('Error al obtener producto', error);
      }
    );
  }
  onBuscarClickSucess(): void {
    Swal.fire({
      title: 'Borrado exitoso',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  }
  // Nuevo método para eliminar producto
  eliminarProducto(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tcgService.deleteProducto(id).subscribe(
          (response: any) => {
            Swal.fire({
              title: 'Producto eliminado',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
            // Después de borrar, actualizamos la lista de productos
            this.productos = this.productos.filter(producto => producto.id !== id);
          },
          (error) => {
            Swal.fire({
              title: 'Error al eliminar producto',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
            });
            console.error('Error al eliminar producto', error);
          }
        );
      }
    });
  }
}