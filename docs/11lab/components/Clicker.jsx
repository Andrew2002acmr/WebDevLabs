const { useState } = React

function ClickCount() {

    const [count, setCount] = useState(0);

    return <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}