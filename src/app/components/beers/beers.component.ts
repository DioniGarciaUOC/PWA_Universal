import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
    trigger('spinfFadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class BeersComponent implements OnInit {
  loading: boolean = true;

  beers: Beer[] = [];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((beers) => {
      this.beers = beers;
      this.loading = false;
    });
  }
}
