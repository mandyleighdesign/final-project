import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { QuestionComponent } from './question/question.component';


import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// import { QuizService } from './quiz.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'favorites', component: FavoritesComponent}, 
  // {path: '', redirectTo: 'home/1', pathMatch: 'full' },
  // {path: '**', redirectTo: 'home/1'},
  { path: 'question/:questionId', component: QuestionComponent }
];
//   { path: '', redirectTo: '/question/0', pathMatch: 'prefix' }
// ];



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
    QuestionComponent, 
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
