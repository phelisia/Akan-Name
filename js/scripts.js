function getName() {
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;



    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwaa'];
    var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dateParticular = new Date(year, month - 1, date);
    var dateIndexParticular = dateParticular.getDay();
    alert("You were born on a "+daysOfTheWeek[dateIndexParticular]);

    function printName() {
        if (maleChecked) {
            document.getElementById('show').innerHTML ="Your Akan Name is "+maleNames[dateIndexParticular];
            document.getElementById('show').style.color = "black";
            document.getElementById('show').style.margin = "2%";
            document.getElementById('show').style.border = "2px solid black";
        }
        else {
            document.getElementById('show').innerHTML = "Your Akan name is "+femaleNames[dateIndexParticular];
            document.getElementById('show').style.color = "black";
            document.getElementById('show').style.margin = "2%";
            document.getElementById('show').style.border = "2px solid black";
        }
    }

    if (year > 0 && year < 2090) {
        //do something
        if (month > 0 && month < 13) {
            //do something
            if (date > 0 && date) {

                printName();
            }
            else {
                alert("Invalid Date: Enter a correct date");
                document.values.date.focus();
                return false;
            }
        }
        else {
            alert("Invalid Month: Enter a correct month");
            document.values.month.focus();
            return false;
        }
    }
    else {
        alert("Invalid Year: Enter a correct one");
        document.values.year.focus();
        return false;
    }



}

    