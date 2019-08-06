import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino: string;
  constructor(private activaterRoute: ActivatedRoute, private HeroesService: HeroesService) { 

    
  }

  ngOnInit() {

    this.activaterRoute.params.subscribe( params =>{
     this.termino =  params['termino'];
     console.log(this.termino)
     this.heroes = this.HeroesService.buscarHeroes(this.termino);

    })
  }

}
