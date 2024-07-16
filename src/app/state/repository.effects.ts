import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GitHubService } from '../services/github.service';
import { loadRepositories, loadRepositoriesSuccess, loadRepositoriesFailure } from './repository.actions';

@Injectable()
export class RepositoryEffects {
  loadRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRepositories),
      switchMap((action) => {
        return this.githubService.getRepositories(action.username).pipe(
          map(repositories => loadRepositoriesSuccess({ repositories })),
          catchError(error => of(loadRepositoriesFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GitHubService
  ) {}
}


