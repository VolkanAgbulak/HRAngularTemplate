import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidateslist',
  template: `
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-left">
    <h1 class="display-4">Candidate List</h1>
    <div class="row">
      <div class="col-sm-3 mb-4" *ngFor="let item of service.candidatesList">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">{{item.name.first}} {{item.name.last}}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{item.phone}}</li>
          </ul>
          <div class="card-body">
            <a href="/candidates/{{item.login.uuid}}" class="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>  
    </div>
  </div>
  `,
})
export class CandidateslistComponent implements OnInit {
  constructor(private service: CandidatesService, private router: Router) { }
  ngOnInit() {
    this.service.getCandidates()
        .subscribe( data => { this.service.setCandidates(data); });
  }
}