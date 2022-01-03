
const allConstruct = (target, wordBank) =>{
  if(target === '') return [[]];
  var result = []
  for (let word of wordBank){
    if(target.indexOf(word) === 0){  
      newss = target.slice(word.length)
     let  waysFromChild =  allConstruct(newss, wordBank);
     let targetWays = waysFromChild.map(way => [word, ...way])
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
