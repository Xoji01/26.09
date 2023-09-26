let arr = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]]
let total = arr[0][0].a.price+arr[1][0].a.price+arr[2][0].a.price
console.log(
    total
)

let agg  = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = []
let odd = []
agg. forEach ( (num ) => {
if (num%2 === 0) {
even. push (num)
} else {
odd.push (num)
}
})
console. log (
    even, odd)
    let  qq =+ prompt('Введите число')
    let i = 10
    do{
      if(qq<100){
        qq =+prompt(`Введите число`);
      }
      else if(qq >100){
        alert('Добро пожаловать')
        }
      i--
    }
    while(i>0 ) 