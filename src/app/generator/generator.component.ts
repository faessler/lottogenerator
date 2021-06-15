import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Numbers as NumbersType, AdditionalNumbers as AdditionalNumbersType } from '../data/lotteries';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  name: string;
  pattern: {
    numbers: NumbersType
    additionalNumbers: AdditionalNumbersType
  };

  constructor(route: ActivatedRoute) {
    const {name, numbers, additionalNumbers} = route.snapshot.data;
    this.name = name;
    this.pattern = { numbers, additionalNumbers };
  }

  ngOnInit(): void {
  }
}
