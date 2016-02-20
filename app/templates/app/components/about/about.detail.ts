import {Component} from 'angular2/core'
import {Data} from './about.data'

@Component({
  selector: '[aboutDetail]',
  templateUrl: 'components/about/about.detail.html',
  inputs: ['data']
})

export class AboutDetailComponent {
  data: Data;
}