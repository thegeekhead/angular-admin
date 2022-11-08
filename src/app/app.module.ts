import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentModule } from './content/content.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ContentModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
