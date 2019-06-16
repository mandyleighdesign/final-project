import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { EarthComponent } from './earth/earth.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'favorites', component: FavoritesComponent}, 
 


]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    FavoritesComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    EarthComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAdavi0rhuHGX6JZsdsNOjZmw0adYYlzQ',
      libraries: ['places'],
    })


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
