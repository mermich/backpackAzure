import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItem } from '../inventoryItem';


@Component({
  selector: 'InventoryItemsAdd',
  templateUrl: "InventoryItemsAdd.html"
})
export class InventoryItemsAdd implements OnInit {
  public inventoryItem:InventoryItem = new InventoryItem();

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log('InventoryItemsAdd: ngOnInit');
    // Pas de code supplementaire requis.
  }

  save(): void {
    console.log('InventoryItemsAdd:save');
    // Appel de la methode du serveur pour enregistrer et redirection vers l'ecran de listing.
    this.httpClient.post<InventoryItem[]>(`http://localhost:7054/api/InventoryItems`, this.inventoryItem)
      .subscribe(result => this.router.navigate(['/InventoryItemsList']));;
  }
}
