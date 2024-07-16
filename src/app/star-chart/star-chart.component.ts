import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as d3 from 'd3';
import { Store } from '@ngrx/store';
import { RepositoryState } from '../state/repository.reducer';
import { GitHubRepo } from '../models/github-repo.model';

@Component({
  selector: 'app-star-chart',
  templateUrl: './star-chart.component.html',
  styleUrls: ['./star-chart.component.css']
})
export class StarChartComponent implements OnInit {
  private data: GitHubRepo[] = [];

  private svg:any;
  private margin = { top: 20, right: 20, bottom: 30, left: 60 };
  private width = 800 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;

  constructor(private store: Store<{ repository: RepositoryState }>) {}

  ngOnInit() {
    this.store.select(state => state.repository.filteredRepositories)
    .subscribe(value => this.data = value);
    this.createSvg();
    this.createChart();
  }

  private createSvg(): void {
    this.svg = d3.select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private createChart(): void {
    const x = d3.scaleBand()
      .range([0, this.width])
      .padding(0.1)
      .domain(this.data.map(d => d.name));

    const y = d3.scaleLinear()
      .range([this.height, 0])
      .domain([0, d3.max(this.data, d => d.stargazerCount) || 0]);

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${this.height})`)
      .call(d3.axisBottom(x));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10));

    this.svg.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d:any) => x(d.name) as number)
      .attr('y', (d:any) => y(d.stargazerCount))
      .attr('width', x.bandwidth())
      .attr('height', (d:any) => this.height - y(d.stargazerCount));
  }
}