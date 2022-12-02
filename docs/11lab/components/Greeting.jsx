function Greeting() {
    const date = new Date()
    const hours = date.getHours()

    if(hours > 6 && hours < 12){
        return <p>Good Morning</p>
    }
    else if(hours < 18){
        return <p>Good Afternoon</p>
    }
    else{
        return <p>Good night</p>
    }
}
