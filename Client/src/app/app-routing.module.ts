import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { ViewjobComponent} from './viewjob/viewjob.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'aboutus',component: AboutusComponent },
  { path: 'header', component: HeaderComponent },
   { path: 'footer', component: FooterComponent },
   { path: 'careers', component: CareersComponent },
   { path: 'quiz', component: QuizComponent },
   { path: 'viewjob', component: ViewjobComponent }
   
   
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [AboutusComponent, HeaderComponent, FooterComponent, ViewjobComponent, QuizComponent,CareersComponent];
