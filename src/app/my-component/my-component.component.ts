import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=[
    [
      'Rays', 'Yankees', 'Blue Jays', 'Orioles', 'Red Sox', 'Royals', 'Twins',
      'Tigers', 'Indians', 'White Sox', 'Astros', 'Rangers', 'Angels',
      'Mariners', 'Athletics'
  ],
  [
    'Cardinals', 'Pirates', 'Cubs', 'Reds', 'Brewers', 'Dodgers', 'Giants',
    'Diamondbacks', 'Padres', 'Rockies', 'Nationals', 'Mets', 'Braves',
    'Marlins', 'Phillies'
],
[
  'Tampa Bay Rays', 'New York Yankees', 'Toronto Blue Jays',
  'Baltimore Orioles', 'Boston Red Sox', 'Kansas City Royals',
  'Minnesota Twins', 'Detroit Tigers', 'Cleveland Indians',
  'Chicago White Sox', 'Houston Astros', 'Texas Rangers',
  'Los Angeles Angels', 'Seattle Mariners', 'Oakland Athletics'
]
  ]

}
