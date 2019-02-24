import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidatesdetail',
  template: `
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-left">
    <h1 class="display-4">Candidate Detail</h1>
    <div class="row">
      <div class="col-sm-6 mb-4 mt-4" *ngFor="let item of service.singleCandidates">
        <div class="card" >
          <img class="card-img-top" src="{{item.picture.large}}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.name.first}} {{item.name.last}}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{item.gender}}</li>
            <li class="list-group-item">{{item.phone}}</li>
            <li class="list-group-item">{{item.email}}</li>
          </ul>
        </div>
      </div>  
    </div>
  </div>
  `,
})
export class CandidatesdetailComponent implements OnInit {
  public uuID;
  constructor(private service: CandidatesService, private route: ActivatedRoute) { }
  ngOnInit() {
    var idx = this.route.snapshot.paramMap.get('id')
    this.uuID = idx
    this.service.getCandidates()    
        .subscribe( data => { this.service.findCandidates(data,this.uuID); });
  }

}
