import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface User {
  name: string;
  profileImageUrl: string;
  products: Product[];
  description: string;
  followers: string[];
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
    name: 'John Smith',
    profileImageUrl: 'https://cdn2.iconfinder.com/data/icons/data-privacy-and-gdpr/512/GDPR3-18-512.png',
    products: [
      { 
        name: 'horquilla', 
        price: 10, 
        imageUrl: 'https://i.pinimg.com/236x/72/fb/fe/72fbfedf11b3f4a5a831bb3945ab7cfe.jpg', 
        description: 'Description 1' 
      },
      { 
        name: 'cuerno', 
        price: 20, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj8Xyo-ieXtITHo3FEf2gzkDc7VLR7TPqZlt6dZoTkNt2UBpefAkr0BZ_B5QXl9aTeas&usqp=CAU', 
        description: 'Description 2' 
      },
      { 
        name: 'uniforme socut', 
        price: 30, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRK4jvqMJkk1KvZmz1mE6lxyMjmgayao9mnHwmpW5RobXMOGjlB3MJgFktjj3Tv7g7lk&usqp=CAU', 
        description: 'Description 3' 
      }
    ],
    description: 'escriba la descripción de usuario',
    followers: []
  };

  editDescription(): void {
    Swal.fire({
      title: 'Ingrese su nueva descripción:',
      input: 'text',
      inputValue: this.user.description,
      inputPlaceholder: 'Descripción de usuario',
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debe ingresar una descripción';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.user.description = result.value;
        Swal.fire({
          icon: 'success',
          title: 'Descripción actualizada!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  followUser(): void {
    this.user.followers.push('usuario actual');
    Swal.fire({
      icon: 'success',
      title: `Ahora sigues a ${this.user.name}!`,
      showConfirmButton: false,
      timer: 1500
    });
  }
}