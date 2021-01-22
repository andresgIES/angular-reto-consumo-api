import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConsultarPersonajeComponent } from './components/consultar-personaje/consultar-personaje.component';
import { ConsultarComicComponent } from './components/consultar-comic/consultar-comic.component';
import { DinamicComponentDirective } from './directives/dinamic-component.directive';
import { ConsultarSeriesComponent } from './components/consultar-series/consultar-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPersonajeComponent,
    ConsultarComicComponent,
    DinamicComponentDirective,
    ConsultarSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
