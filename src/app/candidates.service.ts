import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICandidates } from './candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  candidatesList: ICandidates[];
  singleCandidates: ICandidates[];
  constructor(private http: HttpClient) { }
  getCandidates() {
    return this.http.get<ICandidates[]>('https://randomuser.me/api/?seed=foobar&results=10');
  }
  setCandidates(users: ICandidates[]) {
    this.candidatesList = users['results'];
  }
  findCandidates(users: ICandidates[],idx: any){
    this.singleCandidates = users['results'].filter(x => x.login.uuid === idx);
  }
}
