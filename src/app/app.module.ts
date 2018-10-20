import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Services
// import { AplicativoService } from './services/aplicativo.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PreparacionComponent } from './components/preparacion/preparacion.component';
import { AlimentacionComponent } from './components/alimentacion/alimentacion.component';
import { GimnasiaComponent } from './components/gimnasia/gimnasia.component';
import { SkilldrillsComponent } from './components/skilldrills/skilldrills.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormacionComponent,
    FooterComponent,
    PreparacionComponent,
    AlimentacionComponent,
    GimnasiaComponent,
    SkilldrillsComponent,
    TiendaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
