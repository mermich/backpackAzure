import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem } from '../inventoryItem';


@Component({
  selector: 'InventoryItemsEdit',
  templateUrl: "InventoryItemsEdit.html"
})
export class InventoryItemsEdit implements OnInit {
  public inventoryItem:InventoryItem | undefined;

  constructor(private httpClient: HttpClient, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('InventoryItemsEdit:ngOnInit');
    let id = this.activedRoute.snapshot.paramMap.get('id');
    // todo recuperation de l'item a partir du serveur.
  }

  save(): void {
    console.log('InventoryItems-Update:save');
    // Envoi des modifications vers le serveur et redirection vers la page de listing.
  }
}
