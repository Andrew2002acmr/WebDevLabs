const { useState} = React

function AddName() {

    const [name, setName] = useState("")



    return (
        <div className="container">
            <h2 id="addName">Hello, {name} </h2>
            <input type="text" id="inputName" placeholder="What's your name?" />
            <button onClick={()=> setName(inputName.value)}>Submit</button>
        </div>
    );
}
