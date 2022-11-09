console.log("Доброе утро!")

a = 7
b = 4

words = "ЗдЕсь ЕсТь КаКоЙ-То ТеКсТ"

document.getElementById("variables").innerHTML = `a = ${a}<br>b = ${b}<br>a + b = ${a + b}`;
document.getElementById("textCase").innerHTML = `Сам текст: ${words}<br>Текст в верхнем регистре: ${words.toUpperCase()}<br>Текст в нижнем регистре: ${words.toLowerCase()}`
document.getElementById("operations").innerHTML = `a + b = ${a + b}<br>a - b = ${a - b}<br>a * b = ${a * b}<br>a / b = ${a / b}<br>b^2 = ${b**2}<br>a % b = ${a % b}`

function hello_name(){
    var name = document.getElementById("name").value
    var hours = new Date().getHours()

    if(name == ""){
        alert("Вы не ввели имя")
    }
    else{
        hours < 6 ? alert(`Здравствуй, ${name}! Чего не спим?`) : hours < 12 ? alert(`Доброе утро, ${name}! Проснулись улыбнулись)`) : hours < 18 ? alert(`Добрый день ${name}! Работа в полном разгаре?`) : alert(`Добрый вечер, ${name}! Как прошёл день?`)
    }
}


function factorial_message(){
    var num = document.getElementById("number").value

    if(Number.isInteger(num) || num < 1){
        alert("Нужно ввести целое число больше 0")
    }
    else {
        var factorial_num = factorial(num)
        alert(`!${num} = ${factorial_num}`)
    }
}

function factorial(num){
    return (num !=1 ) ? num * factorial(num - 1) : 1
}
