export interface Numbers {
  quantity: number;
  min: number;
  max: number;
}
export interface AdditionalNumbers extends Numbers {
  type: 'star' | 'lucky';
}
export interface Lottery {
  name: string;
  numbers: Numbers;
  additionalNumbers: AdditionalNumbers;
}
export interface Lotteries {
  [key: string]: Lottery
}

export const lotteries: Lotteries = {
  euroMillions: {
    name: 'Euro Millions',
    numbers: {
      quantity: 5,
      min: 1,
      max: 50,
    },
    additionalNumbers: {
      type: 'star',
      quantity: 2,
      min: 1,
      max: 12,
    },
  },
  swissLotto: {
    name: 'Swiss Lotto',
    numbers: {
      quantity: 6,
      min: 1,
      max: 42,
    },
    additionalNumbers: {
      type: 'lucky',
      quantity: 1,
      min: 1,
      max: 6,
    },
  },
};
