import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'wb-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  logout(): void {
    this.localStorageService.clearStorage();
  }

}
