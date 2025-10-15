export default function Card({title, price, image}){
    return(
        <div>
            <h1>{title}</h1>
            <img>{image}</img>
            <p>{price}</p>
        </div>
    )
}