import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutorComponent } from './pages/autor/autor.component';
import { AssistirComponent } from './pages/assistir/assistir.component';
import { CaracteresComponent } from './pages/caracteres/caracteres.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { VersoesComponent } from './pages/versoes/versoes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FilmesComponent } from './pages/filmes/filmes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autor', component: AutorComponent },
  { path: 'assistir', component: AssistirComponent },
  { path: 'caracteres', component: CaracteresComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'versoes', component: VersoesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
