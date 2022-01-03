
const allConstruct = (target, wordBank, meno = {}) =>{
  if (target in meno) return meno[target];
  if(target === '') return [[]];
  var result = []
  for (let word of wordBank){
    if(target.indexOf(word) === 0){  
      newss = target.slice(word.length)
     let  waysFromChild =  allConstruct(newss, wordBank, meno);
     let targetWays = waysFromChild.map(way => [word, ...way]) 
      /** this will take every sub array and add word tp the begining**/ 
      meno[target] = targetWays;
      
     result.push(...targetWays)
    }
   
  }

  return result 
}

console.log(allConstruct("purple", ["purp", 'p', 'ur','le', 'purpl']))

/**
  [
  ['purp', 'le'],
  ['p', 'ur', 'p','le']
  ]
*/

console.log(allConstruct("eeeeeeeeeeeeeeeeef", ["ee", 'e', 'ee','e', 'eee']))
/**
  
  []
*/

