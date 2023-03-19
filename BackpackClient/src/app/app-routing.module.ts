import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemsAdd } from './InventoryItemsAdd/inventoryItemsAdd';
import { InventoryItemsList } from './InventoryItemsList/InventoryItemsList';
import { InventoryItemsEdit } from './InventoryItemsEdit/InventoryItemsEdit';

const routes: Routes = [
  { path: 'InventoryItemsList', component: InventoryItemsList },
  { path: 'InventoryItemsAdd', component: InventoryItemsAdd },
  { path: 'InventoryItemsEdit/:id', component: InventoryItemsEdit }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
