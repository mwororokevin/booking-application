import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    ContactPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
