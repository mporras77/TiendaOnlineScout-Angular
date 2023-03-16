import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  characteristics: string;
  availability: number;
}

interface User {
  productPrice: any;
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
        price: 10.000,
        imageUrl: 'https://i.pinimg.com/236x/72/fb/fe/72fbfedf11b3f4a5a831bb3945ab7cfe.jpg',
        description: 'Description 1',
        characteristics: 'Características del producto 1',
        availability: 10
      },
      {
        name: 'cuerno',
        price: 20.000,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj8Xyo-ieXtITHo3FEf2gzkDc7VLR7TPqZlt6dZoTkNt2UBpefAkr0BZ_B5QXl9aTeas&usqp=CAU',
        description: 'Description 2',
        characteristics: 'Características del producto 2',
        availability: 5
      },
      {
        name: 'uniforme socut',
        price: 30.000,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRK4jvqMJkk1KvZmz1mE6lxyMjmgayao9mnHwmpW5RobXMOGjlB3MJgFktjj3Tv7g7lk&usqp=CAU',
        description: 'Description 3',
        characteristics: 'Características del producto 3',
        availability: 2
      }
    ],
    description: 'Escriba su descripción de usuario',
    followers: [],
    productPrice: undefined
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
      title: `¡Ahora sigues a ${this.user.name}!`,
      text: `Has seguido a ${this.user.name} exitosamente. El precio de su producto es de ${this.user.productPrice} COP.`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  zoomImage(imageUrl: string): void {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: 'Imagen de producto',
      imageWidth: 800,
      imageHeight: 'auto',
      footer: '<i> Haz clic en la imagen para ampliarla aún más </i>',
      allowOutsideClick: true,
      confirmButtonText: 'Cerrar',
    });
  }

buyProduct(product: Product): void {
  if (product.availability <= 0) {
    Swal.fire({
      icon: 'warning',
      title: `Lo sentimos, ${product.name} está agotado`,
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: `Se ha añadido al carito ${product.name}!`,
      showConfirmButton: false,
      timer: 1500
    });
    product.availability--;
  }
}
}