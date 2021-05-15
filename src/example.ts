type TypeFn = (first: string, second: string) => string;

const concat: TypeFn = (a, b) => a + b;
concat('Hello ', 'World'); // -> Hello World;

interface myTaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: [{ howIDoIt: string; simeArray: (string | number)[] }];
}

const myHometask: myTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

myHometask.howIDoIt = 'I dont understand';

interface MyArray<T> {
  [N: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce<U>(fn: (accum: U, curValue: T) => U, initValue: U): U;
  reduce<U>(fn: (accum: U, curValue: T) => U): U;
}

const tsArr: MyArray<number> = [5, 7, 42];

tsArr.map((i) => i + 1);
tsArr.map((i) => `$(i) + 1`);

tsArr.reduce((i: number, j) => i + j);
