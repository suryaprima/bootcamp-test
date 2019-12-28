function validNama(){
    var strNama = "SURYAPRIMA";
	var nama = /^[A-Z]{3,}$/g;
  	var hasil = nama.test(strNama);
  
  	console.log("hasil nama " + hasil);
}

function validUmur(){
    var strUmur = 12;
	var umur = /^[0-9]{2,2}$/g;
  	var hasil = umur.test(strUmur);
  
  	console.log("hasil umur " + hasil);
}

function validUsername(){
    var strUser = "asdf_1111";
	var user = /^[a-z]{4}[_|.][0-9]{3}$/g;
  	var hasil = user.test(strUser);
  
  	console.log("hasil username " + hasil);
}

validNama();
validUmur();
validUsername();