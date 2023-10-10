import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './routes/analysis/analysis.component';
import { GamePredictionComponent } from './routes/game-prediction/game-prediction.component';
import { LoginComponent } from './routes/login/login.component';
import { PlayerListComponent } from './routes/player-list/player-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'gamePrediction', component: GamePredictionComponent },
  { path: 'playersList', component: PlayerListComponent },
  { path: 'analyses', component: AnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
