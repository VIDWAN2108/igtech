import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmlPdfComponent } from './html-pdf/html-pdf.component';
import { JsonParserComponent } from './json-parser/json-parser.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html-pdf', component: HtmlPdfComponent },
  { path: 'json-parser', component: JsonParserComponent },
  { path: 'app', component: AppComponent },
];



