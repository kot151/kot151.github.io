var tbody = document.querySelector('#tableBody');
function debit() {

    let t1 = document.getElementById('time1').value;
    //вернул tt1 и tt2, чтобы в таблицу красиво выводило)
    let tt1 = t1.split(':');
    let t2 = document.getElementById('time2').value;
    let tt2 = t2.split(':');
    let p1 = document.getElementById('pokaz').value;
    
    h1=+tt1[0] * 60 + +tt1[1];
    h2=+tt2[0] * 60 + +tt2[1];
    if (h1 > h2) {
        deb = Math.round((1440 * p1) / (1440 - (h1 - h2)));
    }
    else if (h1 < h2) {
        deb = Math.round((1440 * p1) / (1440 + (h2 - h1)));
    }
    else {
        deb = p1;
    }
    //alert(deb);
    //document.getElementById('otvet').innerHTML = deb;
    //document.getElementById('tab1').innerHTML = t1;
    //document.getElementById('tab2').innerHTML = t2;
    //document.getElementById('tab3').innerHTML = p1;
    //document.getElementById('tab4').innerHTML = deb;
    
    let arr = Array([t1],[t2],[p1],[deb]);
    const copy = [];
    arr.forEach(function(item){
        console.log(item);
        document.createElement('tr' + item + 'tr').innerHTML;
        
});
//console.log(arr);
    // document.getElementById('tabliz').innerHTML = 
    
    //console.log(tbody);
    //var row = document.createElement('tr');
    //var time1 = document.createElement('td');
    //var time2 = document.createElement('td');
    //var value = document.createElement('td');
    //var response = document.createElement('td');
    //time1.innerHTML = arr[0];
    //time2.innerHTML = arr[1];
    //value.innerHTML = arr[2];
    //response.innerHTML = arr[3];
    //tbody.appendChild(row);
    //row.appendChild(time1);
    //row.appendChild(time2);
    //row.appendChild(value);
    //row.appendChild(response);
};

function clearTable() {
    tbody.innerHTML = '';
    //var table = document.getElementById('table');
    //var child = table.lastElementChild;
    //console.log(child);
    //table.removeChild(child);
};