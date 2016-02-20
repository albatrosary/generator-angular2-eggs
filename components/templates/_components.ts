import {Component} from 'angular2/core'

@Component({
  selector: '<%= dashCase %>',
  templateUrl: 'components/<%= name %>/<%= filename %>.html'
})

export class <%= className %>Component {
  constructor () {
    this.name = '<%= className %>Component';
  }
}
