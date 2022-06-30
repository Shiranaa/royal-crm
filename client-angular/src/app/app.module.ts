import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SessionService } from './services/session.service';
import { SharedComponent } from './shared/shared.component';
import { CoreComponent } from './core/core.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        CustomersComponent,
        ProductsComponent,
        OrdersComponent,
        SignupComponent,
        LoginComponent,
        SharedComponent,
        CoreComponent,
        AuthComponent,
    ],
    imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
    providers: [SessionService],
    bootstrap: [AppComponent],
})
export class AppModule {}
