import { createReducer, on } from '@ngrx/store';
import { loadRepositoriesSuccess, filterRepositories, loadRepositoriesFailure } from './repository.actions';

export interface RepositoryState {
  repositories: any[];
  filteredRepositories: any[];
  error: string | null;
}

export const initialState: RepositoryState = {
  repositories: [],
  filteredRepositories: [],
  error: null,
};

export const repositoryReducer = createReducer(
  initialState,
  on(loadRepositoriesSuccess, (state, { repositories }) => ({
    ...state,
    repositories,
    filteredRepositories: repositories,
    error: null
  })),
  on(filterRepositories, (state, { searchTerm }) => ({
    ...state,
    filteredRepositories: state.repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })),
  on(loadRepositoriesFailure, (state, { error }) => ({
    ...state,
    error, 
    repositories: [], 
    filteredRepositories: []
  }))
);