import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { PrincipalModule } from './principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { SeeInfoComponent } from './see-info/see-info.component';
import { MomentoBrujoComponent } from './momento-brujo/momento-brujo.component';
import { MomentoBrujoModule } from './momento-brujo/momento-brujo.module';

export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SeeInfoComponent,
    MomentoBrujoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MomentoBrujoModule,
    PrincipalModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
