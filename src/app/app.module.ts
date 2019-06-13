import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'home/:page', component: HomeComponent, pathMatch: 'full' },
  {path: 'favorites', component: FavoritesComponent}, 
  {path: '', redirectTo: 'home/1', pathMatch: 'full' },
  {path: '**', redirectTo: 'home/1'}
];

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
