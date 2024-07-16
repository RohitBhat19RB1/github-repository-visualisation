import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GitHubRepo, GitHubUser } from '../models/github-repo.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly GET_REPOSITORIES = gql`
    query GetRepositories($username: String!) {
      user(login: $username) {
        repositories(first: 50) {
          nodes {
            name
            stargazerCount
          }
        }
      }
    }
  `;
  constructor(private apollo: Apollo) {}

  getRepositories(username: string): Observable<GitHubRepo[]> {
    return this.apollo.watchQuery<GitHubUser>({
      query: this.GET_REPOSITORIES,
      variables: { username }
    }).valueChanges.pipe(
      map((result:any) => result.data.user.repositories.nodes as GitHubRepo[]),
      catchError(error => {
        return of([]);
      })
    );
  }
}
