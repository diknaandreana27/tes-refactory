var year = prompt("masukan tahun :");
var isLeap = new Date(year,2,1,-1).getDate()==29;
var kabisat = (year=isLeap)
if(kabisat == true ){
	document.write("Tahun kabisat.");
}else{
	document.write("Bukan Tahun kabisat.");
}