import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventoryItem';

@Component({
  selector: 'InventoryItemsList',
  templateUrl: "inventoryItemsList.component.html",
  styles: [  ]
})
export class InventoryItemsListComponent implements OnInit {
  public inventoryItems: InventoryItem[] | undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('InventoryItemsListComponent');
    this.httpClient.get<InventoryItem[]>(`http://localhost:7054/api/InventoryItems`).subscribe(result => this.inventoryItems = result);
  }
}
