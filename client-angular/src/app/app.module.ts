import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { HomeModule } from './home/home.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CoreComponent } from './core/core.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { CustomersComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExportComponent } from './export/export.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    TopnavComponent,
    CustomerComponent,
    HomeComponent,
    OrdersComponent,
    ProductsComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    ExportComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    CustomersModule,
    HomeModule,
    OrdersModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
