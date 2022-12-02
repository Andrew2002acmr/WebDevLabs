const { useState } = React

function AppTime() {

    const [time, setTime] = useState(null)

    if (time != null) {

        setInterval(() => { setTime(getTime()); document.getElementById("header-time").innerHTML = time; }, 1000)

    }

    return (
        <div className="container">
            <h2 id="header-time">TIME</h2>
            <button onClick={() => { setTime(getTime()) }}>Get Time</button>
        </div>
    );
}
//   document.getElementById("header-time").innerHTML = time;
function getTime() {
    let time = new Date().toLocaleTimeString();
    return time
}
