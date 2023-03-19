import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryItemsAdd } from './InventoryItemsAdd/inventoryItemsAdd';
import { InventoryItemsList } from './InventoryItemsList/InventoryItemsList';
import { InventoryItemsEdit } from './InventoryItemsEdit/InventoryItemsEdit';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InventoryItemsList,
    InventoryItemsEdit,
    InventoryItemsAdd
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
