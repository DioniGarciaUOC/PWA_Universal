import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class BeerComponent implements OnInit {
  beer?: Beer;
  panelOpenState = false;

  allInfo!: boolean;
  constructor(
    private beerService: BeersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allInfo = false;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.beerService.getBeerById(identifier).subscribe((beer) => {
      if (!beer) {
        return this.router.navigateByUrl('/');
      }

      this.beer = beer[0];
    });
  }

  toogleInfo() {
    this.allInfo = !this.allInfo;
  }
}
