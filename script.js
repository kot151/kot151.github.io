function debit() {
    var t1 = document.getElementById('time1').value.split(':');
    var t2 = document.getElementById('time2').value.split(':');
    var p1 = document.getElementById('pokaz').value;
    
    h1=+t1[0] * 60 + +t1[1];
    h2=+t2[0] * 60 + +t2[1];
    if (h1 > h2) {
        deb = Math.round((1440 * p1) / (1440 - (h1 - h2)));
    }
    else if (h1 < h2) {
        deb = Math.round((1440 * p1) / (1440 + (h2 - h1)));
    }
    else {
        deb = p1;
    }
    document.getElementById('otvet').innerHTML = deb;
    document.getElementById('tab1').innerHTML = t1;
    document.getElementById('tab2').innerHTML = t2;
    document.getElementById('tab3').innerHTML = p1;
    document.getElementById('tab4').innerHTML = deb;
    //alert(deb);
}