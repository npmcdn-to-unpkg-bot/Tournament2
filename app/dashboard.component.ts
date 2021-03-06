import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // heroes: Hero[] = [];

  constructor(
    private router: Router) {
    // private heroService: HeroService) {
  }

  ngOnInit() {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoNewTournament() {
    let link = ['/new'];
    this.router.navigate(link);
  }
}
