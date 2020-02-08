function countVowels(str){
    let arr = []
    let regex = /[aiueoAIUEO]/gi
    arr = str.split("")
    let result = []

    if(str.match(regex)){
        for(let i=0; i<arr.length; i++){        
            if(arr[i].match(regex)){
                result.push(arr[i])
            } else {
                arr[i]
            }
        }
        return result.length
    } else {
        return 0
    }    
}

console.log(countVowels("programmers"))
console.log(countVowels("hmm..."))