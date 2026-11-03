import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuardSettings } from '../../services/guard-settings';

@Component({
  imports: [ RouterLink ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected guardSettings = inject(GuardSettings);
}
