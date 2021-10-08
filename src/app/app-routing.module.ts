import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunesComponent } from './components/albunes/albunes.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { TemplateFormsComponent } from './formularios/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './formularios/reactive-forms/reactive-forms.component';
import { ListadoComponent } from './usuarios/listado/listado.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent},
  { path: 'albums/:id', component: AlbunesComponent},
  { path: 'photos/:id', component: PhotosComponent},
  { path: 'activities/:id', component: ActivitesComponent},
  { path: 'templateform', component: TemplateFormsComponent},
  { path: 'reactiveform', component: ReactiveFormsComponent},
  { path: 'listadousuarios', component: ListadoComponent},
  { path: 'form-modal', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
