import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//IMPORTS Routes
// import { RatingModule } from 'ng-starrating';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
// import { MatPaginatorModule } from '@angular/material/paginator';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routes';

//GRAFICAS
import { ChartsModule } from 'ng2-charts';

import { RadarComponent } from './components/grafics/radar/radar.component';
import { PieComponent } from './components/grafics/pie/pie.component';



// IMPORTS COPONENTES
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TablateamsComponent } from './components/Tablas/tablateams/tablateams.component';
import { FoooterComponent } from './components/shared/foooter/foooter.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { PlayersComponent } from './components/players/players.component';
// SERVICIOS
import { PruebaService } from './services/prueba.service';
import { HttpClientModule } from '@angular/common/http';
import { TablatraditionalComponent } from './components/Tablas/tablatraditional/tablatraditional.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarrasComponent } from './components/grafics/barras/barras.component';

// PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { DonutchartComponent } from './components/grafics/donutchart/donutchart.component';
import { TablaplayerComponent } from './components/Tablas/tablaplayer/tablaplayer.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlayerComponent,
    PieComponent,
    TeamsComponent,
    RadarComponent,
    FoooterComponent,
    ComparadorComponent,
    PlayersComponent,
    TablatraditionalComponent,
    LoadingComponent,
    TablateamsComponent,
    BarrasComponent,
    NoimagePipe,
    DonutchartComponent,
    TablaplayerComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSliderModule,
    MatPaginatorModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING, BrowserAnimationsModule, NgbModule
  ],
  providers: [ PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
