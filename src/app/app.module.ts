import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryGridComponent } from './repository-grid/repository-grid.component';
import { StarChartComponent } from './star-chart/star-chart.component';
import { repositoryReducer } from './state/repository.reducer';
import { RepositoryEffects } from './state/repository.effects';
import { FormsModule } from '@angular/forms';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryGridComponent,
    StarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApolloModule,
    HttpClientModule,
    StoreModule.forRoot({ repository: repositoryReducer }),
    EffectsModule.forRoot([RepositoryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api.github.com/graphql',
            headers: new HttpHeaders({ Authorization: `Bearer ${environment.githubToken}` })
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
