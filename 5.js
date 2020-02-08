function fibo(kolom, baris){
    str = ""
    a = 1
    b = 0
    c = 0

    for(let i=0; i<baris; i++){
        for(let j=0; j<=kolom; j++){
            if (j==kolom) {
                str = str.concat("\n")
            } else {
                c = a + b
                a = b
                b = c
                str = str.concat(c + ",")                
            }
        }
    }   
    return str
}

console.log(fibo(4,3))