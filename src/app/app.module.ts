import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { AutorComponent } from './pages/autor/autor.component';
import { CaracteresComponent } from './pages/caracteres/caracteres.component';
import { VersoesComponent } from './pages/versoes/versoes.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AssistirComponent } from './pages/assistir/assistir.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareMenuComponent } from './components/share-menu/share-menu.component';
import { GaleriaComponentComponent } from './components/galeria-component/galeria-component.component';
import { ImgCracteresComponent } from './components/img-cracteres/img-cracteres.component';
import { ConsultaFilmesComponent } from './components/consulta-filmes/consulta-filmes.component';
import { FilmesComponent } from './pages/filmes/filmes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AutorComponent,
    CaracteresComponent,
    VersoesComponent,
    GaleriaComponent,
    AssistirComponent,
    ContatoComponent,
    NotfoundComponent,
    ShareMenuComponent,
    GaleriaComponentComponent,
    ImgCracteresComponent,
    ConsultaFilmesComponent,
    FilmesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
