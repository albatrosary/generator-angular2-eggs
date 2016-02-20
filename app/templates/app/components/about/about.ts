import {Component} from 'angular2/core'
import {AboutBodyComponent} from './about.body'
import {AboutHeadComponent} from './about.head'

@Component({
  selector: 'my-about',
  templateUrl: 'components/about/about.html',
  directives: [AboutHeadComponent, AboutBodyComponent]
})

export class AboutComponent {
}
