import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [],
  selector: 'repro-invalid-nx-cache-root',
  template: `<h1>repro-invalid-nx-cache</h1>`,
})
export class AppComponent {
  private readonly _store = inject(Store)
}
