import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorComponent } from './generator/generator.component';
import { LegalComponent } from './legal/legal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { lotteries } from './data/lotteries';

const routes: Routes = [
  {
    path: 'euro-millions',
    component: GeneratorComponent,
    data: lotteries.euroMillions,
  },
  {
    path: 'swiss-lotto',
    component: GeneratorComponent,
    data: lotteries.swissLotto,
  },
  { path: 'legal-notice', component: LegalComponent },
  { path: '', pathMatch: 'full', redirectTo: 'euro-millions' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
