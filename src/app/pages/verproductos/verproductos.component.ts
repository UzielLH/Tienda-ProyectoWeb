import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verproductos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './verproductos.component.html',
  styleUrl: './verproductos.component.css'
})
export class VerproductosComponent implements OnInit {
  productos: any[] = []; // Arreglo para almacenar los productos
  buscarTermino: string = ''; // Término de búsqueda
  buscarCategoria: string = 'todo'; // Categoría seleccionada

  constructor(private tcgService: TcgService) { }

  ngOnInit(): void {
    this.getAllProductos(); // Cargar todos los productos al inicio
  }

  getAllProductos(): void {
    this.tcgService.getAllproductos().subscribe(
      (data: any) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  // Nuevo método para buscar productos
  buscarProductos(): void {
    if (this.buscarCategoria === 'producto') {
      // Buscar por nombre del producto
      this.tcgService.getProductoByNombre(this.buscarTermino).subscribe(
        (data: any) => {
          this.productos = data;
        },
        (error) => {
          console.error('Error al buscar producto por nombre', error);
        }
      );
    } else if (this.buscarCategoria === 'departamento') {
      // Buscar por departamento
      this.tcgService.getProductosByDepartamento(this.buscarTermino).subscribe(
        (data: any) => {
          this.productos = data;
        },
        (error) => {
          console.error('Error al buscar producto por departamento', error);
        }
      );
    } else {
      // Si es "todo", mostrar todos los productos
      this.getAllProductos();
    }
  }

  // Método para eliminar producto (ya implementado)
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
            // Actualizar la lista de productos
            this.productos = this.productos.filter(producto => producto.id !== id);
          },
          (error) => {
            Swal.fire({
              title: 'Error al eliminar producto',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
            });
          }
        );
      }
    });
  }
}