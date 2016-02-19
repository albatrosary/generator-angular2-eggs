import {Component} from 'angular2/core'
import {RouteConfig, Route, Redirect, ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from '../components/home/home'
import {AboutComponent} from '../components/about/about'
import {ContactComponent} from '../components/contact/contact'

@Component({
  selector: 'my-app',
  templateUrl: 'scripts/config.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  new Redirect({path: '/', redirectTo: ['/Home'] }),
  new Route({path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true}),
  new Route({path: '/about', name: 'About', component: AboutComponent}),
  new Route({path: '/contact', name: 'Contact', component: ContactComponent})
])

export class AppComponent { }
