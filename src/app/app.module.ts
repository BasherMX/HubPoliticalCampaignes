import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Principal/principal/principal.component';
import { PricingComponent } from './Principal/pricing/pricing.component';
import { NavBarComponent } from './Common/nav-bar/nav-bar.component';
import { FooterComponent } from './Common/footer/footer.component';
import { ContactComponent } from './Principal/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PricingComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
