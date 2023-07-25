import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', route: './list' },
    { label: 'Añadir', icon: 'add', route: './new-hero' },
    { label: 'Buscar', icon: 'edit', route: './search' },
  ]
}
