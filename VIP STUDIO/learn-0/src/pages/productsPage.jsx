import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";

const products=[
    {
        id:1,
        name:"Sepatu lain",
        price:"400.000",
        imgSrc:"../../public/images/product-1-shoes.jpg",
        imgAlt:"shoes",
        description:"Jual Product Sepatu dengan harga terjangkau, Silahkan Beli sepatu kami, Insayallah sepatunya bakal barakah"
    },
    {
        id:2,
        name:"Sepatu darmi",
        price:"500.000",
        imgSrc:"https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.1294571741.1695009696&semt=sph",
        imgAlt:"shoes",
        description:"Sepatu dengan kualitas yang bagus dan sangat diminati oleh kalangan muda, Yuk beli sepatu ini dijamin anda kan bahagia selalu"
    },
    {
        id:3,
        name:"Sepatu jangeng",
        price:"600.000",
        imgSrc:"https://img.freepik.com/premium-vector/shoe-illustration-vector_492281-2504.jpg?size=626&ext=jpg&ga=GA1.1.1294571741.1695009696&semt=sph",
        imgAlt:"shoes",
        description:"Sepatu dengan kualitas yang bagus dan sangat diminati oleh kalangan muda, Yuk beli sepatu ini dijamin anda kan bahagia selalu"
    },
    {
        id:4,
        name:"Sepatu asmpas",
        price:"800.000",
        imgSrc:"https://t3.ftcdn.net/jpg/01/21/81/86/240_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg",
        imgAlt:"shoes",
        description:"Di jual sepatu dengan gradasi warna putih hitam merah, beli sepatu ini dijamin bakal happy selalu"
    },
    {
        id:5,
        name:"Sepatu pakai",
        price:"750.000",
        imgSrc:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ad763b174276193.Y3JvcCw5NzAsNzU4LDUwNCwxNDQ.jpg",
        imgAlt:"shoes",
        description:"Di jual sepatu dengan gradasi warna putih hitam merah, beli sepatu ini dijamin bakal selalu semangat dalam menjalani hari hari bersama"
    }
]


const user=JSON.parse(localStorage.getItem("arrayUser"));
const ProductPages=()=>{
    const [card,setCard]=useState([]);
    const [totalprice,setTotalPrice]=useState(0);
    useEffect(()=>{
       setCard(JSON.parse(localStorage.getItem("card"))||[]);
    },[])
    useEffect(()=>{
        if(card.length!==0){
            const sum=card.reduce((acc,item)=>{
                const product=products.find((product)=>product.id===item.id);
                return parseFloat(acc+product.price*item.amount);
            },0)
            setTotalPrice(sum);
            localStorage.setItem("card",JSON.stringify(card));
        }
       
    },[card])
    const handleLogOut=()=>{
        alert("Terima Kasih");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href="/login"
    }
    const handleAddCard = (id) => {
        if (card.filter((item) => item.id === id).length !== 0) {
            setCard(
                card.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item))
            );
        } else {
            setCard([...card, { id, amount: 1 }]);
        }
    };



    return(
       <Fragment>
        <div className="flex justify-end items-center bg-blue-700 text-white pr-10 py-[15px]">
            {user[0].userName}
            <Button classname="bg-red-700" content="Logout" onClick={handleLogOut} />
        </div>
         <div className="flex w-full justify-between py-2">
            <div className="flex flex-wrap gap-2 justify-center flex-basis-2/3">
            {
                products.map((item)=>(
                    <CardProduct key={item.id}>
                        <CardProduct.Header imgAlt={item.imgAlt} imgSrc={item.imgSrc} />
                        <CardProduct.Body productName={item.name}>
                        {item.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={item.price} handleAddCard={handleAddCard} id={item.id}/>
                    </CardProduct>
                  ))
            }
            </div>
            <div className="w-1/3">
                <h1 className="text-3xl bold text-blue-500 ml-5">Card</h1>
                <table className="text-left table-auto border-separate border-spacing-x-5">
                   <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                   </thead>
                   <tbody>
                        {card.map((item)=>{
                           const product=products.find((product)=>product.id===item.id)
                          return(
                            <tr key={item.id}>
                                <td>{product.name}</td>
                                <td>{(product.price).toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</td>
                                <td>{item.amount}</td>
                                <td>{(item.amount * parseFloat(product.price)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                          )
                        })}
                        <tr> 
                            <td colSpan={3}>
                                <b>Total Price</b>
                            </td>
                            <td>
                                <b>                                   
                                {(totalprice).toLocaleString(('id-ID'),{style:'currency',currency:'IDR'})}
                                </b>
                            </td>
                        </tr>
                   </tbody>
                </table>
            </div>
        </div>
       </Fragment>
    )
}

export default ProductPages;