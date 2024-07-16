import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadRepositories, filterRepositories } from '../state/repository.actions';
import { RepositoryState } from '../state/repository.reducer';

@Component({
  selector: 'app-repository-grid',
  templateUrl: './repository-grid.component.html',
  styleUrls: ['./repository-grid.component.css']
})
export class RepositoryGridComponent implements OnInit {
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Stars', field: 'stargazerCount', sortable: true, filter: true },
    { headerName: 'Forks', field: 'forkCount', sortable: true, filter: true },
    { headerName: 'URL', field: 'url', cellRenderer: (params:any) => `<a href="${params.value}" target="_blank">Link</a>` }
  ];

  rowData$: Observable<any[]>;
  username: string = 'torvalds';
  searchTerm: string = 'linux';

  constructor(private store: Store<{ repository: RepositoryState }>) {
    this.rowData$ = store.select(state => state.repository.filteredRepositories);
  }

  ngOnInit(): void {}

  onSearch(): void {
    this.store.dispatch(loadRepositories({ username: this.username }));
  }

  onFilter(): void {
    this.store.dispatch(filterRepositories({ searchTerm: this.searchTerm }));
  }
}
