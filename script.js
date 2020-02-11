function debit() {
    var t1 = document.getElementById('time1').value;
    var t2 = document.getElementById('time2').value;
    var p1 = document.getElementById('pokaz').value;
    var tt1 = t1.split(':');
    var tt2 = t2.split(':');
    h1=parseInt(tt1[0]) * 60 + parseInt(tt1[1]);
    h2=parseInt(tt2[0]) * 60 + parseInt(tt2[1]);
    if (h1 > h2) {
        deb = Math.round((1440 * p1) / (1440 - (h1 - h2)));
    }
    else if (h1 < h2) {
        deb = Math.round((1440 * p1) / (1440 + (h2 - h1)));
    }
    else {
        deb = p1;
    }

    alert(deb);
}