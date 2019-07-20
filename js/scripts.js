var male = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function dayOfWeek(){
var day = parseFloat(document.getElementById("dd").value);
var month = parseFloat(document.getElementById("mm").value);
var year = parseFloat(document.getElementById("yy").value);
var century = (year / 100) + (year % 100 != 0 ? 1 : 0);
var dow =  ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
var dayOw = Math.round(dow);

//if(month = 2 && day > 29){
  //console.log("invalidinput");
 //}

if(day > 0 && day <= 31 && month > 0 && month <= 12){
   
  document.getElementById("dow").innerHTML = days[dayOw];
  document.getElementById("akan").innerHTML = female[dayOw];
  document.getElementById("akan").innerHTML = male[dayOw];

}
else{
  console.log("Invalidinput");
}

};
