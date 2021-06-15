import { Component, OnInit, Input } from '@angular/core';
import { Numbers as NumbersType, AdditionalNumbers as AdditionalNumbersType } from '../data/lotteries';
import { getRandomNumbers } from '../helpers/getRandomNumbers';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  numbers: Array<number> = []
  additionalNumbers: Array<number> = []

  @Input() pattern!: {
    numbers: NumbersType
    additionalNumbers: AdditionalNumbersType
  }

  constructor() {
  }
  getRandomMainNumbers() {
    const { quantity, max, min } = this.pattern.numbers;
    return getRandomNumbers(quantity, min, max, 'asc') || [];
  }
  getRandomAdditionalNumbers() {
    const { quantity, max, min } = this.pattern.additionalNumbers;
    return getRandomNumbers(quantity, min, max, 'asc') || [];
  }
  ngOnInit(): void {
    this.numbers = this.getRandomMainNumbers();
    this.additionalNumbers = this.getRandomAdditionalNumbers();
  }
}
