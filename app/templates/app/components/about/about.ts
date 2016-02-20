import {Component} from 'angular2/core'
import {HTTP_PROVIDERS, Http, Request, Response} from 'angular2/http';

@Component({
  selector: 'my-about',
  providers: [HTTP_PROVIDERS],
  templateUrl: 'components/about/about.html'
})

export class AboutComponent {
  constructor(http: Http) {
    http.request(new Request({
      method: "Get",
      url: "http://localhost:8000/api/gruntfiles"
    })).subscribe((res: Response) => {
      this.status = res.status;
      this.list = res.json();
    });
  }
}
