import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListComponent } from './candidatos/candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos/candidatos-detail/candidatos-detail.component';

const routes: Routes = [

    { path: '', component: CandidatosListComponent },
    { path: 'candidatos', loadChildren: () => import('./candidatos/candidatos.module').then(m => m.CandidatosModule) },
    { path: 'candidatos/:id', component: CandidatosDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
