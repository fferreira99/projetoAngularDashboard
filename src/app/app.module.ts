import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MapaDeColetasComponent } from './mapa-de-coletas/mapa-de-coletas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ColetasAgendadasComponent } from './coletas-agendadas/coletas-agendadas.component';
import { IndicesDeDesempenhoComponent } from './indices-de-desempenho/indices-de-desempenho.component';
import { HistoricoDeColetasComponent } from './historico-de-coletas/historico-de-coletas.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    NavbarComponent,
    FooterComponent,
    MapaDeColetasComponent,
    PerfilComponent,
    ColetasAgendadasComponent,
    IndicesDeDesempenhoComponent,
    HistoricoDeColetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
