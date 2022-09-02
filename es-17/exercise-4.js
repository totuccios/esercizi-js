function calculate() {
  let number= 0;
  return {
    add(nmbr){
      number += nmbr;
      return this;
    },
    multiply(nmbr){
      number *= nmbr;
      return this;
    },
    sub(nmbr){
      number -= nmbr;
      return this;
    },
    divide(nmbr){
      number /= nmbr;
      return this;
    },
    printResult(){
      console.log(number);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7