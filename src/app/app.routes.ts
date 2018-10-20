
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { PreparacionComponent } from './components/preparacion/preparacion.component';
import { AlimentacionComponent } from './components/alimentacion/alimentacion.component';
import { GimnasiaComponent } from './components/gimnasia/gimnasia.component';
import { SkilldrillsComponent } from './components/skilldrills/skilldrills.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'preparacion', component: PreparacionComponent },
  { path: 'alimentacion', component: AlimentacionComponent },
  { path: 'gimnasia', component: GimnasiaComponent },
  { path: 'skilldrill', component: SkilldrillsComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
