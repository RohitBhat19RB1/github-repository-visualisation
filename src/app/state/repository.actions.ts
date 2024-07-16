import { createAction, props } from '@ngrx/store';
import { GitHubRepo } from '../models/github-repo.model';

// Define action types
export const loadRepositories = createAction(
  '[Repository] Load Repositories',
  props<{ username: string }>()
);

export const filterRepositories = createAction(
  '[Repository] Filter Repositories',
  props<{ searchTerm: string }>()
);

export const loadRepositoriesSuccess = createAction(
  '[Repository] Load Repositories Success',
  props<{ repositories: GitHubRepo[] }>()
);

export const loadRepositoriesFailure = createAction(
  '[Repository] Load Repositories Failure',
  props<{ error: string }>()
);
