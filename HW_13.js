

// 1. Исправить работу слайда 29, сделать что 
// бы выводилась последовательность 
// от 1 до 10 двумя разными способами без ЕС6

for (var i = 0; i < 10; i++) {
  function index(i){
    console.log(i)
  };
  setTimeout(index ,3000, i+1)
  
}

for (var i = 0; i < 10; i++) {
  setTimeout(function(i) { 
    console.log(i);
      },5000, i+1)
}

// 2. Написать цепочку вызовов математических вычислений
// math.sum().sum().minus().multiplay().showResult().

var maths = {
  number : 5,
  result : 0, 

  sum : function () {
    this.result = this.result + this.number;
    return this ;
  },

  minus : function () {
    this.result = this.result - this.number;
    return this
  },

  multiplay : function () {
    this.result = this.result * this.number ;
    return this
  },
  
  showResult : function () {
    console.log(this.result);
    return this
  }
}

maths.sum().sum().minus().showResult();
