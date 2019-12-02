function submition(){
    var month = parseInt(document.getElementById("year").value);
    var year = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    if(month=== "" || month < 1 || month >12)
alert("confirm you have enterd correct info!")
if(year=== "" || year.length>4)
alert("confirm you have enterd correct info!")
if(date === "" || date<0 || date >30)
alert("confirm you have enterd correct info")
else{
var day = mouth.round((((5*years/4))+((26*(month+1)/10)) + date) % 7);
return day
}
}

    function getName(){
    var name = document.getElementById(name).value;
    var maleNames =[Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwaa];
    var femaleNames =[Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama,];
    if(getGender() === "male"){
    document.getElementById("show").innerHTML = `{name}! if you were born in Ghana your name would be ${male[getDay(name)]}`;
    
    }elseif(getGender() === "female"){
        document.getElementById("show").innerHTML = `{name}! if you were born in Ghana your name would be ${female[getDay(name)]}`;

    }
