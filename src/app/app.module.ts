import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalysisComponent } from './routes/analysis/analysis.component';
import { PlayerListComponent } from './routes/player-list/player-list.component';
import { GamePredictionComponent } from './routes/game-prediction/game-prediction.component';
import { LoginComponent } from './routes/login/login.component';

@NgModule({
  declarations: [AppComponent, AnalysisComponent, PlayerListComponent, GamePredictionComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
