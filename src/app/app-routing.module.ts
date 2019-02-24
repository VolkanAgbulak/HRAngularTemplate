import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateslistComponent } from './candidateslist/candidateslist.component';
import { CandidatesdetailComponent } from './candidatesdetail/candidatesdetail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path : '', component: HomePageComponent},
  { path : 'abous-us', component: AboutUsComponent},
  { path : 'candidates', component: CandidateslistComponent},
  { path : 'candidates/:id', component: CandidatesdetailComponent},
  { path : "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CandidateslistComponent,CandidatesdetailComponent,NotFoundComponent,HomePageComponent,AboutUsComponent]