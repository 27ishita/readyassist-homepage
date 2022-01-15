import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TestimonialsComponent,
    ReviewsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
