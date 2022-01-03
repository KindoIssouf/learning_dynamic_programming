const fib = (n)=>{
  
 // if(n<=2) return 1
 // return  fib(n-1) + fib(n-2)

  /** this a tabulated method with o(n)  runtime o(n) space**/
  const table = Array(n+1).fill(0)
  table[1] = 1;

  for (let i = 0; i<= n ; i++){
    table [i +1 ] += table[i]
    table [i + 2 ] += table[i]
  }

  return table[n]
  
  
  
}

console.log(fib(6))

