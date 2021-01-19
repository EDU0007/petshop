import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { ProductsPageComponent } from './store/products-page/products-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { FramePageComponent } from './pages/account/master/frame.page';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './components/store/product-card/product-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    LoginPageComponent,
    FramePageComponent,
    ProductsPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    SignupPageComponent,
    ProductCardComponent,
 


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }