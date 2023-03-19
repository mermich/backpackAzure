import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'BackpackClient2';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/InventoryItemsList']);
  }
}