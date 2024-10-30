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
}