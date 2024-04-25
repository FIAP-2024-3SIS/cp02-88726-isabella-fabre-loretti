import { Component, Input } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-item',
  standalone: true,
  imports: [],
  templateUrl: './animal-item.component.html',
  styleUrl: './animal-item.component.css'
})
export class AnimalItemComponent {

  /**
   *
   */
  constructor() {
    //this.animal = new Animal();
    //this.animal.nome = "Mingau";
    //this.animal.especie = "Felino";
    //this.animal.idade = 18;
    //this.animal.sexo = "Macho";


  }

  //animal: Animal;
  @Input() animal: Animal = new Animal("", "",0,"");

}
