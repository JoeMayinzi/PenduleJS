const jour = document.querySelector(".jour")
const dateDiv = document.querySelector(".date");
const yearDiv = document.querySelector(".year");
const hourDiv = document.querySelector(".heure");




const displayHours = ()=> {
    let date, hour, minutes, seconds,listdays, dayName,dayNum, listMonths, month, year, deuxChiffres
    deuxChiffres = (element) => {
        if (element < 10) {
            return element = "0" + element;
        } else {
            return element
        }
    }

    date = new Date();
    hour = deuxChiffres(date.getHours());
    minutes = deuxChiffres(date.getMinutes());
    seconds = deuxChiffres(date.getSeconds());
    listdays = ["Dimache", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    listMonths = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aôut", "Septembre","Octobre", "Novembre", "Décembre"];
    dayName = listdays[date.getDay()];
    dayNum = deuxChiffres(date.getDay());
    month = listMonths[date.getMonth()];
    year = date.getFullYear()


    
    jour.textContent = dayName;
    dateDiv.textContent = dayNum + " " + month;
    yearDiv.textContent = year;
    hourDiv.textContent = hour + " : " + minutes + " : " + seconds
    setTimeout(displayHours, 1000);
}

displayHours(displayHours)



