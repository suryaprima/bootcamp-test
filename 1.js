function bio(nama, umur){
    return {
        name: nama,
        age: umur,
        address: "Huta II Bandar Tinggi",
        hobbies: ["Catur", "Badminton", "Nonton"],
        is_married: false,
        list_school: 
        [
            {
                name: "SD 091641 Bandar Tinggi",
                year_in: 2000,
                year_out: 2006
            },
            {
                name: "SMP Swasta Taman Siswa",
                year_in: 2006,
                year_out: 2009
            },
            {
                name: "SMK Negeri 1 Air Putih",
                year_in: 2009,
                year_out: 2012,
                major: "Teknik Komputer Jaringan"
            }
        ],
        skills:
        [
            {
                skill_name: "Catur",
                level: "beginner"
            },
            {
                skill_name: "Badminton",
                level: "beginner"
            }        
        ],
        interest_in_coding: true
    }
    
}
console.log(bio("Surya Prima",25));
console.log(bio("Boy",18));
console.log(bio("Girl",17));