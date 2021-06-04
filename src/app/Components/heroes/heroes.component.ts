import { Component, OnInit } from '@angular/core';
import { ServiceHeroesService } from 'src/app/Servicios/service-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = {}; 

  constructor( private servicioHeroes: ServiceHeroesService) { 
    this.heroes = servicioHeroes.getHeroes();
    console.log(this.heroes);
  }

  ngOnInit(): void {
  }

}
