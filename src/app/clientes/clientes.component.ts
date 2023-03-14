import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  activeClients = [
    { id: 1, name: 'Juan', email: 'juan@mail.com', address: 'Calle 123', phone: '1234567890', joinDate: '2022-02-01' },
    { id: 2, name: 'Maria', email: 'maria@mail.com', address: 'Calle 456', phone: '0987654321', joinDate: '2022-02-15' }
  ];
  inactiveClients = [
    { id: 3, name: 'Pedro', email: 'pedro@mail.com', address: 'Calle 789', phone: '5678901234', joinDate: '2022-03-01', purchases: 10 },
    { id: 4, name: 'Laura', email: 'laura@mail.com', address: 'Calle 1011', phone: '4321098765', joinDate: '2022-03-15', purchases: 20 }
  ];

  constructor() { }

  ngOnInit() {
  }

  reactivateClient(clientId: number) {
    const clientToReactivate = this.inactiveClients.find(client => client.id === clientId);
    if (clientToReactivate && clientToReactivate.purchases > 15) {
      this.activeClients.push(clientToReactivate);
      this.inactiveClients = this.inactiveClients.filter(client => client.id !== clientId);
      Swal.fire(
        '¡Cliente Reactivado!',
        'El cliente ha sido reactivado exitosamente.',
        'success'
      );
    } else if (clientToReactivate) {
      Swal.fire(
        'No se pudo reactivar el cliente',
        'El cliente debe tener más de 15 compras para poder ser reactivado.',
        'error'
      );
    } else {
      Swal.fire(
        'No se encontró el cliente',
        'El cliente que intenta reactivar no existe en la lista de clientes inactivos.',
        'error'
      );
    }
  }
}