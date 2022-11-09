
function calc_love(){
    let firstName = prompt("Имя его")
    let secondName = prompt("Имя её")
    let result = Math.round(Math.random() * 100)

    alert(`${firstName} подходит к ${secondName} на ${result} процентов!`)
}


function calc_bmi(){
    let weight = prompt("Введите ваш вес")
    let height = prompt("Введите ваш рост")

    let bmi = (weight / height**2) * 10000

    if(bmi.toFixed(1) <= 18.5) {
        alert("Недостаточный вес")
    }else if(bmi.toFixed(1) <= 25){
        alert("Нормально")
    }else if(bmi.toFixed(1) <= 30){
        alert("У вас излишек веса")
    }else if(bmi.toFixed(1) > 30){
        alert("Ожирение")
    }
    
}

function leap_year(){
    let year = prompt("Введите год")

    if(year % 4 == 0 && year % 100 != 0){
        alert("Год високосный")
    }
    else{
        year % 400 == 0 ? alert('Год високосный') : alert("Год невисокосный") 
    }
    
}

function dinner_payment(){
    let namesString = prompt("Введите имена через запятую с пробелом")

    let names = namesString.split(', ')
    var result = names[Math.floor(Math.random() * names.length)]

    alert(`Оплачивать будет ${result}`)
}