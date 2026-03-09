import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HeadComponent } from './components/head/head.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { CenterHeaderComponent } from './components/center-header/center-header.component';
import { CenterBodyComponent } from './components/center-body/center-body.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainComponent, HeadComponent, SideBarComponent, ExplorerComponent, CenterHeaderComponent, CenterBodyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(withEventReplay()),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
