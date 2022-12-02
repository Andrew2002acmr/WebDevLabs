function Card(props) {
    const name = props.name
    const imgUrl = props.imgUrl
    const phone = props.phone
    const email = props.email

    return <li>
        <h2>{name}</h2>
        <img
            src= {imgUrl}
            alt="avatar_img"
        />
        <p>{phone}</p>
        <p>{email}</p>
    </li>
}