import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { RegistraComponent } from './components/registra/registra.component';
import { ItemComponent } from './components/item/item.component';
import { EjemploifComponent } from './components/ejemploif/ejemploif.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { ListaVehiculos2Component } from './components/lista-vehiculos2/lista-vehiculos2.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { ListacuadradosComponent } from './components/listacuadrados/listacuadrados.component';
import { ListalistaComponent } from './components/listalista/listalista.component';
import { TreloComponent } from './components/trelo/trelo.component';
import { PokeTreloComponent } from './components/poke-trelo/poke-trelo.component';
import { AlbumsComponent } from './components/albums/albums.component';

import {HttpClientModule} from '@angular/common/http';
import { AlbunesComponent } from './components/albunes/albunes.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { BiaconoPipe } from './pipes/biacono.pipe';
import { ActivitesDetalleComponent } from './components/activites-detalle/activites-detalle.component';
import { TemplateFormsComponent } from './formularios/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './formularios/reactive-forms/reactive-forms.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './usuarios/listado/listado.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './post/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    RegistraComponent,
    ItemComponent,
    EjemploifComponent,
    NavbarComponent,
    ListaVehiculosComponent,
    ListaVehiculos2Component,
    ListaPokemonComponent,
    ListacuadradosComponent,
    ListalistaComponent,
    TreloComponent,
    PokeTreloComponent,
    AlbumsComponent,
    AlbunesComponent,
    PhotosComponent,
    ActivitesComponent,
    BiaconoPipe,
    ActivitesDetalleComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ListadoComponent,
    FormularioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
