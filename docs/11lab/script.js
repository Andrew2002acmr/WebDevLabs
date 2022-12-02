


const food = ["Яичница", "Курица", "Гречка"];
const element = <ul>
    <li>{food[0]}</li>
    <li>{food[1]}</li>
    <li>{food[2]}</li>
</ul>;

ReactDOM
    .render(
        element,
        document.getElementById('food')
    );

const firstName = "Андрей"
const lastName = "Крючков"
const num = Math.round(Math.random() * 100)

ReactDOM.render(
    <div>
        <h1>Привет, {firstName} {lastName}</h1>
        <p>Твое счастливое число {num}!</p>
    </div>,
    document.getElementById("Hello")
)

const headerStyle = {
    color: "#9d121e",
    fontSize: "30px"
}

const headerElement = <h1 style={headerStyle}>Здесь текст со стилями</h1>

ReactDOM.render(
    headerElement,
    document.getElementById("style-header")
)


ReactDOM.render(
    <App />,
    document.getElementById("repeat-food")
)


ReactDOM.render(
    <div>
        <h2>Модули</h2>
        <ul>
            <li>{pi}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
        </ul>
    </div>,
    document.getElementById("math-pi")
);


ReactDOM.render(
    <div>
        <h2>Приветствие</h2>
        <Greeting />
    </div>,
    document.getElementById("greating")
)

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <ul>
            <Card name="Beyonce" imgUrl="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phone="+123 456 789" email="b@beyonce.com"/>
            <Card name="Jack Bauer" imgUrl="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" phone="+987 654 321" email="jack@nowhere.com"/>
            <Card name="Chuck Norris" imgUrl="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" phone="+918 372 574" email="gmail@chucknorris.com"/>
        </ul>
        
    </div>,
    document.getElementById("props")
);


ReactDOM.render(
    <ClickCount/>,
    document.getElementById("hooks")
  );

  ReactDOM.render(<AppTime />, document.getElementById("time"));


  ReactDOM.render(<AddName />, document.getElementById("addname"));
