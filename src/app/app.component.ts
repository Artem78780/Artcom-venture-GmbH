import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { InterfaceData } from './InterfaceData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  films?: InterfaceData[];

  selectedFilm?: InterfaceData;

  toggle?: boolean

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.dataService.getData()
      .subscribe(film => this.films = film.slice(0, 15))
  }

  onSelec(film: InterfaceData): void{
    this.selectedFilm = film
  }

  closeWindow(){
    this.toggle = false
  }
  showWindow(){
    this.toggle = true
  }
  
}
