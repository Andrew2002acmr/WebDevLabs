function momentExample(){
    const moment = require("moment");

    console.log(
        `
            ${moment().format()}
            ${moment().format("DD.MM.YYYY H:m")}
        `
    );
    
    moment.locale("ru");
    
    console.log(moment().format("dddd, Do MMMM Y"));
   
}

console.log("Вывод сообщения каждую секунду при помощи setInterval")
let sHi = setInterval(()=> {console.log("Hello")}, 1000)

setTimeout(() => {clearInterval(sHi); console.log("stop\nsetTimeout выполняет завершение вывода через 4 секунды"); momentExample();}, 4000)



