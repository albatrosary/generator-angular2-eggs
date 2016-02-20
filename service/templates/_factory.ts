import {Injectable} from 'angular2/core';
import {Http, Request, Response} from 'angular2/http';

@Injectable()
export class <%= className %>Service {
  
  constructor(private http: Http) {
  }
}