import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  items: any[] | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.initial(),
      },
      {
        label: 'About',
        icon: 'pi pi-user',
        command: () => this.about(),
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => this.contact(),
      },
      {
        label: 'Documentation',
        icon: 'pi pi-envelope',
        command: () => this.documentation(),
      }
    ];
  }

  contact(): void {
    this.router.navigate(['/contact']);
  }

  initial(): void {
    this.router.navigate(['/home']);
  }

  about(): void {
    this.router.navigate(['/about']);
  }

  documentation(): void {
    this.router.navigate(['/documentation']);
  }
}
