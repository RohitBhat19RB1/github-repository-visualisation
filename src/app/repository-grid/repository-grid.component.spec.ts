import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryGridComponent } from './repository-grid.component';

describe('RepositoryGridComponent', () => {
  let component: RepositoryGridComponent;
  let fixture: ComponentFixture<RepositoryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryGridComponent]
    });
    fixture = TestBed.createComponent(RepositoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
