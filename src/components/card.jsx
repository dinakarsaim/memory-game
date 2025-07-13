const Card = (props) => {
    const {charData, onClick} = props

    const {id, name, image} = charData;
    return (
        <div className="card" onClick={onClick}>
            <img src={image}></img>
            <p>{name}</p>
        </div>
    )
};

export default Card;