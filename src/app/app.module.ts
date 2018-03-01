import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentComponent } from './home/content/content.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TestdirectiveDirective } from './testdirective.directive';
import {AppMaterialModule} from './app-material/app-material.module';
import { QuizPipePipe } from './quiz-pipe.pipe';
import { PostsPipe } from './pipes/posts.pipe';
import { BodyPipe } from './pipes/body.pipe';
import { LoginComponent } from './home/content/login/login.component';
import { InscriptionComponent } from './home/content/inscription/inscription.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { DetailComponent } from './home/content/detail/detail.component';

import { RouterModule, Routes } from '@angular/router';
import { AddquestionComponent } from './home/content/addquestion/addquestion.component'
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'addquestion', component: AddquestionComponent },
];

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    TestdirectiveDirective,
    QuizPipePipe,
    PostsPipe,
    BodyPipe,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    DetailComponent,
    AddquestionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule,
    //HttpClient,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging
    ),

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
