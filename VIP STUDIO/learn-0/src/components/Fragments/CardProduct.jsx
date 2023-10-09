import Button from "../Elements/Buttons"
const CardProduct=(props)=>{
    const { children }=props
    return(
        <div className="w-full max-w-sm bg-gray-800 border-gray-500 rounded-lg shadow-gray shadow-2xl">
            {children}   
        </div>
    )
}

const Header=({ imgSrc, imgAlt })=>{
    return(
        <a href="">
            <img src={imgSrc} alt={imgAlt} className="p-2"/>
        </a>
    )
}
const Body=(props)=>{
    const{ children, productName,}=props
    return(
        <div className="px-5 pb-3">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{productName}</h5>
                <p className="text-m text-white">
                    {children.substring(0,100)}
                </p>
            </a>
        </div>
    )
}
const Footer=({ price, handleAddCard, id })=>{
    return (
        <div className="flex items-center justify-between px-5 pb-2">
                <span className="text-xl font-bold text-white">Rp {price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</span>
                <Button content="Add to Cart" classname="bg-orange-500" onClick={()=>handleAddCard(id)}/>
        </div>
    )
}
CardProduct.Header=Header;
CardProduct.Body=Body;
CardProduct.Footer=Footer;
export default CardProduct