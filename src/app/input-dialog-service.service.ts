import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { AlertController } from 'ionic-angular';
import { GroceryServiceService } from './grocery-service.service';

/*
  Commented code will meet requirements for drop down, however ionic-angular 
  package does not work with ionic v4
*/

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(private alertController: AlertController, private groceryService: GroceryServiceService) { }

  async promptAlert(item?: any, index?: number) {
    const alert = await this.alertController.create({
      header: item ? 'Edit the item..': 'Add an item..',
      //title: item ? 'Edit': 'Add',
      //message: item ? 'Edit the item..': 'Add an item..',
      inputs: [
        {
          placeholder: 'Name',
          name: 'name',
          value: item ? item.name: null
        },
        {
          placeholder: 'Quantity',
          name: 'quantity',
          value: item ? item.quantity: null
          /*
          type: 'select',
          options: [
            {
              text: '1',
              value: '1',
            },
            {
              text: '5',
              value: '5',
            },
            {
              text: '10',
              value: '10',
            },
          */
        },
      ],
      buttons: [
        {
          'text': 'Cancel',
          'role': 'cancel',
        },
        {
          'text': 'Save',
          'handler': (item: any) => {
            if (index !== undefined) {
              this.groceryService.editItem(item, index)
              console.log('Saving ', item);
            } else {
              this.groceryService.addItem(item)
              console.log('Adding ', item);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
}
