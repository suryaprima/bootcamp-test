function checkUsername(username){
    let regex = /^[a-z]{5,9}$/g
    
    if(username.match(regex)){
        return true
    } else{
        return false
    }
}

console.log("Username")
console.log("checkUsername(\"cod3r\") \n return " + checkUsername("cod3r"))
console.log("checkUsername(\"siska\") \n return " + checkUsername("siska"))

function checkPassword(password){
    let angka =/[0-9]{1,}/g
    let symbol = /([~`!@#$%^&*(),.?/<>:"{}]{1,})/g
    let hurufKecil = /([a-z]{1,})/g
    let hurufBesar = /([A-Z]{1,})/g

    if(angka.test(password) && symbol.test(password) && hurufKecil.test(password) && hurufBesar.test(password) && password.length >= 8){
        return true
    } else{
        return false
    }
}

console.log("\nPassword")
console.log("checkPassword(\"p4s$gW\") \n return " + checkPassword("p4s$gW"))
console.log("checkPassword(\"codeYourFuture!123\") \n return " + checkPassword("codeYourFuture!123"))