import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
  styleUrls: ["./heroe-tarjeta.component.css"]
})
export class HeroeTarjetaComponent implements OnInit {
  // con @input le decimos que este atributo se va a llenar desde afuera, 
  // si lo inicializo en el constructor se queda con ese valor siempre y cuando no se llene de afuera (por ejemplo de un componente padre)
  // ejemplo <app-heroe-tarjeta [heroe]= "heroe" *ngFor="let heroe of  heroes; let i = index"></app-heroe-tarjeta>
  @Input() heroe: any = {};
  @Input() idx: number;

  //Emite eventos desde el hijo al padre, se pone nombre del evento que va a escuchar el padre, emite un observable en este caso del tipo number
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor() {
  
      this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit() {}


  verHeroe(){
    // Dispara El evento
    // El padre lo escucha asi <app-heroe-tarjeta (heroeSeleccionado)="verHeroe( $event )"
    this.heroeSeleccionado.emit( this.idx );

  }
}
