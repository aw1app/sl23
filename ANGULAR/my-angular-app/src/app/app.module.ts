import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent,  } from './product/product.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ProductV2Component } from './product-v2/product-v2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductV3Component } from './product-v3/product-v3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    ProductV2Component,
    ProductListComponent,
    ProductV3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//PROBLEM: Create a User Component and display the user name and email on the front page