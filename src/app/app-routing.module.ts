import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'aboutme', component :AboutmeComponent, pathMatch: 'full' },
  { path: 'portfolio', component :PortfolioComponent, pathMatch: 'full' },
  { path: 'blog', component :BlogComponent, pathMatch: 'full' },
  { path: 'contact', component :ContactComponent, pathMatch: 'full' },
  { path: 'resume', component :ResumeComponent, pathMatch: 'full' },
  { path: 'services', component :ServicesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
