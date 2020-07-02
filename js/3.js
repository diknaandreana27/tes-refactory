var angka = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
var max = Math.max.apply(Math, angka);
var min = Math.min.apply(Math, angka);
var jumlah = angka.length;
    for(var i = 0; i<angka.length; i++){
        total +=angka[i]
    }
var rata = (total/jumlah);

document.write("Dari Angka-angka : "+angka+"<br>");
document.write("angka terbesar : "+max+"<br>");
document.write("angka terkecil : "+min+"<br>");
document.write("angka rata-rata : "+rata+"<br>");