let biodata = {
    name: "Surya Prima Siregar",
    age: 25,
    address: "Medan",
    hobbies: [],
    is_married: false,
    list_school: 
    [{
        name: "SD 091641 Bandar Tinggi",
        year_in: 2000,
        year_out: 2006,
        major: null
    },
    {
        name: "SMP Swasta Taman Siswa Sei Suka",
        year_in: 2006,
        year_out: 2009,
        major: null
    },
    {
        name: "SMK Negeri 1 Air Putih",
        year_in: 2009,
        year_out: 2012,
        major: "Teknik Komputer Jaringan"
    }],
    skills: 
    [{
        name: "HTML",
        level: ["beginner","advanced","expert"]
    },
    {
        name: "CSS",
        level: ["beginner","advanced","expert"]
    }],
    interest_in_coding: true
};

function bio(nama, umur){
    if(nama === biodata.name && umur === biodata.age){
        return biodata;
    } else {
        return console.log("data tidak ditemukan");
    }
}

let biodatas = bio("Surya Prima Siregar", 25);
console.log(biodatas);