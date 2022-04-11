import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
