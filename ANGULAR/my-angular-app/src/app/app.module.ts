import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent,  } from './product/product.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ProductV2Component } from './product-v2/product-v2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductV3Component } from './product-v3/product-v3.component';
import { ProductV2Service } from './services/product-v2.service';
import { ProductV4Component } from './product-v4/product-v4.component';
import { ProductListV4Component } from './product-list-v4/product-list-v4.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    ProductV2Component,
    ProductListComponent,
    ProductV3Component,
    ProductV4Component,
    ProductListV4Component
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ProductService, ProductV2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }


//PROBLEM: Create a User Component and display the user name and email on the front page