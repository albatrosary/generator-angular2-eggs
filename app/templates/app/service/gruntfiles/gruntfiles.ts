import {Injectable} from 'angular2/core';
import {Http, Request, Response} from 'angular2/http';

@Injectable()
export class GruntfilesService {
  public list;
  
  constructor(private http: Http) {
  }
  
  public fetch() {
    return this.http
      .get("http://localhost:8000/api/gruntfiles")
  }
}
