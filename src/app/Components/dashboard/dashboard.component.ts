import { Component, OnInit } from '@angular/core';
import { ServiceHeroesService, Heroes } from 'src/app/Servicios/service-heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Array<Heroes> = []

  constructor(private servicioHeroes : ServiceHeroesService) { 
    this.heroes = this.servicioHeroes.getHeroes();
    console.log(this.heroes)
  }

  ngOnInit(): void {
  }

}
