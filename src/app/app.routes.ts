import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';

export const routes: Routes = [
  {
    component: AuthComponent,
    path: '',
    children: [
      { component: HomeComponent, path: '' },
      { component: ContactComponent, path: 'contact' },
      { component: HomeComponent, path: 'home' },
      { component: AboutComponent, path: 'about' },
      { component: DocumentationComponent, path: 'documentation' },
    ],
  },
];
