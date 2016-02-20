import {Component} from 'angular2/core'

@Component({
  selector: '[<%= text %>]',
  templateUrl: 'components/<%= name %>/<%= filename %>.html'
})

export class <%= className %>Component {
  constructor () {
    this.name = '<%= className %>Component';
  }
}
