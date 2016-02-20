import {Component} from 'angular2/core'
import {HTTP_PROVIDERS, Response} from 'angular2/http'
import {GruntfilesService} from 'service/gruntfiles/gruntfiles'
import {AboutDetailComponent} from './about.detail'

@Component({
  selector: 'about-body',
  providers: [HTTP_PROVIDERS, GruntfilesService],
  templateUrl: 'components/about/about.body.html',
  directives: [AboutDetailComponent]
})

export class AboutBodyComponent { 
  constructor(private gruntfilesService: GruntfilesService) {
    this.gruntfilesService.fetch()
      .subscribe((res: Response) => {
        this.list = res.json();
      });
  }
}
