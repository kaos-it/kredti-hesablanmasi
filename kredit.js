function hesablaKredit(emekHaqqi, istenenMebleg, istenenMuddet) {
    // Maksimal kredi meblegi emek haqqinin 10 misli olmalidir
    var maksimumMebleg = emekHaqqi * 10;
    
    // Ayliq odenish emek haqqinin 45% innen cox olmamalidir
    var maksimumOdenish = emekHaqqi * 0.45;

    // Maksimal muddet 36-aydir
    if (istenenMuddet > 36) {
        return "Size bu shertlerle kredit dushmur";
    }

    // Faiz derecesi hesablanmasi
    var faizDerecesi;
    if (istenenMuddet <= 12) {
        faizDerecesi = 0.13;
    } else if (istenenMuddet <= 24) {
        faizDerecesi = 0.15;
    } else {
        faizDerecesi = 0.17;
    }

    // Kredi meblegi ve ayliq odenishi hesablanmasi
    if (istenenMebleg > maksimumMebleg || istenenMebleg > maksimumOdenish * istenenMuddet) {
        return "Size bu shertlerle kredit dushmur";
    } else {
        var ayliqFaiz = istenenMebleg * faizDerecesi / 12;
        var ayliqOdenish = (istenenMebleg / istenenMuddet) + ayliqFaiz;
        return "Ayliq odenish: " + ayliqOdenish.toFixed(2) + ", Faiz derecesi: " + (faizDerecesi * 100).toFixed(2) + "%";
    }
}

// Örnek kullanım
var emekHaqqi = 3000;
var istenenMebleg = 200;
var istenenMuddet = 24;
console.log(hesablaKredit(emekHaqqi, istenenMebleg, istenenMuddet));
