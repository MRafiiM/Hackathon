const kumpulanDataOrang = []

function getDaftarDatas() {
    var rEmail = document.getElementById("regsEmail").value;
    var rTglLahir = document.getElementById("regsTglLahir").value;
    var rNamaLkp = document.getElementById("regsNamaLkp").value;
    var rPassword = document.getElementById("regsNamaPswrd").value;
    var rKotaDmsl = document.getElementById("regsKotaDmsl").value;
    var rRePswrd = document.getElementById("regsRePswrd").value;

    console.log(rEmail, rTglLahir, rNamaLkp, rPassword, rKotaDmsl, rRePswrd);

    if (rPassword == rRePswrd) {
        console.log("Data berhasil diambil")
        insertData(rEmail, rTglLahir, rNamaLkp, rPassword, rKotaDmsl);
    }

    console.log("Function insert data di dalam insert berhasil");
}

function insertData (email, tglLahir, nama, password, kota) {
    var calonData = {
        email:email,
        tanggalLahir:tglLahir,
        namaLengkap:nama,
        kataSandi:password,
        kotaDmsl:kota,
    }

    kumpulanDataOrang.push(calonData);

    console.log(calonData.email);
    console.log(calonData.tanggalLahir);
    
    console.log(calonData);

    console.log(kumpulanDataOrang);

    console.log(kumpulanDataOrang[0]);

    console.log(kumpulanDataOrang[0].email);

    console.log(kumpulanDataOrang[0].email);
}

//
//
//
//
//
// id="regsEmail"
//="regsTglLahir"
//d="regsNamaLkp"
//"regsNamaPswrd" 
//="regsKotaDmsl"
//id="regsRePswrd