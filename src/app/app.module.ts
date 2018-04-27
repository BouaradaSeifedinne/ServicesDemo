import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { StartComponent } from './home/container/start/start.component';
import { DocsComponent } from './home/container/docs/docs.component';
import { SendmailComponent } from './home/container/sendmail/sendmail.component';
import { AlertComponent } from './home/container/alert/alert.component';
import { LoginComponent } from './home/container/login/login.component';
import { RegisterComponent } from './home/container/register/register.component';

export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    StartComponent,
    DocsComponent,
    SendmailComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
