var tbody = document.querySelector('#tableBody');
const debit = () => {

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
   
    let row = document.createElement('tr');
    tbody.appendChild(row);
    let arr = Array([t1],[t2],[p1],[deb]);
        arr.forEach(function(item){
        let column = document.createElement('td');
        tbody.appendChild(column);
        column.innerHTML = (item);
        
});

};

function clearTable() {
    tbody.innerHTML = '';
    
};