import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

export interface Shop {
  name: string,
  category: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  public name!: string;
  public category!: string
  private data!: any
  private shop!: Shop;
  public shops!: Array<Shop>;

  constructor() { this.shops = [] }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss({
      name: this.name,
      category: this.category
    }, 'confirm')
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.data = ev.detail.data;
      this.shop = this.data;
      this.shops.push(this.shop);
    }
  }

}
