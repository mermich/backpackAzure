import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventoryItem';

@Component({
  selector: 'InventoryItemsList',
  templateUrl: "InventoryItemsList.html"
})
export class InventoryItemsList implements OnInit {
  public inventoryItems: InventoryItem[] | undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('InventoryItemsList:ngOnInit');

    this.loadInventoryItems();
  }

  loadInventoryItems(): void
  {
    // Recuperation des elements a partir du serveur et affectation a la variable inventoryItems.
    this.httpClient.get<InventoryItem[]>(`http://localhost:7054/api/InventoryItems`).subscribe(result => {
      this.inventoryItems = result;
      console.table(this.inventoryItems);
    });
  }

  delete(): void {
    console.log('InventoryItemsAdd:delete');
    // Appel de la methode du serveur pour enregistrer et redirection vers l'ecran de listing.
    // TODO

    // Puis rechargement des elements.
    this.loadInventoryItems();
  }
}
