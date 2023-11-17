import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonIcon, IonFab, IonFabButton, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { create, trash, add } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';
import { GroceryServiceService } from '../grocery-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, CommonModule, IonIcon, IonFab, IonFabButton, IonButton ],
})

export class GroceryPage {
  constructor(private toastController: ToastController, private groceryService: GroceryServiceService, private inputDialogService: InputDialogServiceService) {
    addIcons({ trash, create, add });
  }

  title = 'Grocery List'

  loadItems() {
    return this.groceryService.getItem()
  }

  removeItem(item: any, index: number) {
    console.log('Removing ', item)
    this.groceryService.removeItem(index)
    this.presentToast(`${item.name} has been deleted.`);
  }

  editItem(item: any, index: number) {
    console.log('Editing ', item)
    this.inputDialogService.promptAlert(item, index)
    this.presentToast(`${item.name} has been edited.`);
  }

  addItem() {
    console.log('Adding Item')
    this.inputDialogService.promptAlert()
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
    });
    await toast.present();
  }
}