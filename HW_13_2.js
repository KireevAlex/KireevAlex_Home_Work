
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
