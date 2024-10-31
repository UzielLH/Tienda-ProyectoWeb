import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TcgService } from '../../services/tcg.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent implements OnInit {
  producto: any = {}; // Variable para almacenar los datos del producto
  id: number | null = null; // Variable para almacenar el ID del producto

  constructor(
    private route: ActivatedRoute, 
    private router: Router, // Router para redirigir tras actualizar
    private tcgService: TcgService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); // Obtener el ID de la URL
    if (this.id) {
      this.obtenerProducto(this.id); // Llamar al método para obtener los datos del producto
    }
  }

  obtenerProducto(id: number): void {
    this.tcgService.getProducto(id).subscribe(
      (data: any) => {
        this.producto = data; // Asignar los datos del producto a la variable
      },
      (error) => {
        console.error('Error al obtener producto', error);
      }
    );
  }

  actualizarProducto(): void {
    if (this.id) {
      this.tcgService.updateProducto(this.producto, this.id).subscribe(
        (response: any) => {
          Swal.fire({
            title: 'Producto actualizado exitosamente',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            this.router.navigate(['/verproductos']); // Redirigir a la lista de productos tras actualizar
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error al actualizar producto',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
          console.error('Error al actualizar producto', error);
        }
      );
    }
  }

  onBuscarClickFailed(): void {
    Swal.fire({
      title: 'Actualización cancelada',
      icon: 'error',
      timer: 1500,
      showConfirmButton: false,
    });
    this.router.navigate(['/verproductos']); // Redirigir a la lista si se cancela
  }
}