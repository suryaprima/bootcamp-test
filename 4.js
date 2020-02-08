function ganti_kata(str,dicari,pengganti){
    let arr = []
    arr = str.split("")
    for(let i=0; i<=str.length; i++){
        if(arr[i]==dicari){
            arr[i] = pengganti
        } else{
            arr[i]
        }        
    }
    return arr.join('')
}

console.log(ganti_kata("Tuban", 'a', 'u'))