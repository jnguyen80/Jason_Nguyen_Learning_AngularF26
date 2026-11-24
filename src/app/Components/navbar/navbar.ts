import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuardSettings } from '../../services/guard-settings';
import { LoadingService } from '../../services/loading';
import { SavedService } from '../../services/saved';
import { PreferencesService } from '../../services/preferences';

@Component({
  imports: [ RouterLink ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected guardSettings = inject(GuardSettings);
  protected loading = inject(LoadingService);
  protected saved = inject(SavedService);
  protected prefs = inject(PreferencesService);
}
