import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TcgService } from '../../services/tcg.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-verventas',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, CommonModule],
  templateUrl: './verventas.component.html',
  styleUrl: './verventas.component.css'
})
export class VerventasComponent implements OnInit {
  ventas: any[] = [];
  fechaSeleccionada: string = '';
  sumaTotal: number = 0;

  constructor(private tcgService: TcgService) {}

  ngOnInit() {
    this.mostrarTodasVentas();
  }

  buscarVentas() {
    if (!this.fechaSeleccionada) {
      Swal.fire({
        icon: 'warning',
        title: 'Fecha no seleccionada',
        text: 'Por favor, selecciona una fecha antes de buscar.',
        showConfirmButton: false,
        timer:1500
      });
      return;
    }

    this.tcgService.getVentaByFecha(this.fechaSeleccionada).subscribe((data: any) => {
      if (data.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No hay ventas',
        text: 'No se encontraron ventas para la fecha seleccionada.',
        showConfirmButton: false,
        timer: 1500
      });
      } else {
      this.ventas = data;
      this.calcularSumaTotal();
      }
    });
  }

  mostrarTodasVentas() {
    this.tcgService.getAllVentas().subscribe((data: any) => {
      this.ventas = data;
      this.calcularSumaTotal();
    });
  }

  calcularSumaTotal() {
    this.sumaTotal = this.ventas.reduce((sum, venta) => sum + venta.total, 0);
  }
}