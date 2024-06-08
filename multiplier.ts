type Operation = 'multiply' | 'add' | 'divide';

const multiplicator = (a: number, b: number, op: Operation): number | string => {
  switch (op) {
    case 'multiply':
      return a * b;

    case 'add':
      return a + b;

    case 'divide':
      return b === 0 ? "can't divide by 0" : a / b;
  }
};

console.log(multiplicator(2, 3, 'divide'));
