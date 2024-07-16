import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryGridComponent } from './repository-grid/repository-grid.component';
import { StarChartComponent } from './star-chart/star-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full' },
  { path: 'repositories', component: RepositoryGridComponent },
  { path: 'chart', component: StarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
