import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  items = [
    {
      'name': 'Banana',
      'quantity': 2,
    },
    {
      'name': 'Milk',
      'quantity': 1,
    },
    {
      'name': 'Sugar',
      'quantity': 3,
    },
    {
      'name': 'Bread',
      'quantity': 12,
    }
  ];

  constructor() { }

  addItem(item: any) {
    this.items.push(item);
  }

  getItem() {
    return this.items
  }

  editItem(item: any, index: number) {
    this.items[index] = item
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

}
