import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubHomeComponent } from './publico/pages/pub-home/pub-home.component';
import { PubNavComponent } from './publico/nav/pub-nav/pub-nav.component';
import { LoginComponent } from './publico/pages/login/login.component';
import { VshomeComponent } from './privado/video_streeam/vshome/vshome.component';
import { SidebarComponent } from './privado/video_streeam/nav/sidebar/sidebar.component';
import { TopNabComponent } from './privado/video_streeam/nav/top-nab/top-nab.component';
import { WSidebarComponent } from './privado/wiki/nav/w-sidebar/w-sidebar.component';
import { WhomeComponent } from './privado/wiki/whome/whome.component';
const routes: Routes = [
  //##################### Public  #####################
  { path: '', component: PubHomeComponent},
  {path: 'login', component: LoginComponent},

  //##################### Private #####################

  //video Stremaing
  {path: 'p/vs/home', component: VshomeComponent},

  //wiki
  {path: 'p/w/home', component: WhomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PubHomeComponent,
    PubNavComponent,
    LoginComponent,
    VshomeComponent,
    SidebarComponent,
    TopNabComponent,
    WSidebarComponent,
    WhomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
