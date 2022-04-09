import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/aut-routing.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
