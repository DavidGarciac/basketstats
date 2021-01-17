import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { PlayersComponent } from './components/players/players.component';



const APP_ROUTES: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'player' , component: PlayerComponent},
    {path: 'players' , component: PlayersComponent},
    {path: 'players/:sort' , component: PlayersComponent},
    {path: 'players/:sort' , component: PlayersComponent},
    {path: 'teams' , component: TeamsComponent},
    {path: 'comparador' , component: ComparadorComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// export class AppRoutingModule { }
