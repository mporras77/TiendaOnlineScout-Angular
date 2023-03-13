import { Component } from '@angular/core';

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
    profileImageUrl: 'https://example.com/profile-image.png',
    products: [
      { 
        name: 'Product 1', 
        price: 10, 
        imageUrl: 'https://example.com/product1.png', 
        description: 'Description 1' 
      },
      { 
        name: 'Product 2', 
        price: 20, 
        imageUrl: 'https://example.com/product2.png', 
        description: 'Description 2' 
      },
      { 
        name: 'Product 3', 
        price: 30, 
        imageUrl: 'https://example.com/product3.png', 
        description: 'Description 3' 
      }
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    followers: []
  };

  editDescription(): void {
    const newDescription = prompt('Ingrese su nueva descripción:');
    if (newDescription !== null) {
      this.user.description = newDescription;
    }
  }

  followUser(): void {
    this.user.followers.push('usuario actual');
    alert(`Ahora sigues a ${this.user.name}`);

  }
}