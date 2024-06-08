type Operation = 'multiply' | 'add' | 'divide';

const multiplicator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'multiply':
      return a * b;

    case 'add':
      return a + b;

    case 'divide':
      if (b === 0) throw new Error("can't divide by zero");
      return a / b;

    default:
      throw new Error('Operation is neither +, * or /')
  }
};

try {
  console.log(multiplicator(2, 0, 'divide'));
} catch (err: unknown) {
  let errorMessage = 'Something went wrong: '
  if (err instanceof Error) errorMessage += err.message;
  console.log(errorMessage)
} 
