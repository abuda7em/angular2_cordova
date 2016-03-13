import {Component} from 'angular2/core';
import {SubRoute} from './sub.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'my-app',
  directives:[ROUTER_DIRECTIVES],
  template:`
  <div>Device Is Ready, Angular2 is working</div>
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path:'/',name:'Sub',component:SubRoute,useAsDefault:true}
])
export class AppComponent{

}
