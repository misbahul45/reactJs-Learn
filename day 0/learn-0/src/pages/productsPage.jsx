import { Fragment } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";

const product=[
    {
        id:1,
        name:"Sepatu",
        price:"400.000",
        imgSrc:"../../public/images/product-1-shoes.jpg",
        imgAlt:"shoes",
        description:"Jual Product Sepatu dengan harga terjangkau, Silahkan Beli sepatu kami, Insayallah sepatunya bakal barakah"
    },
    {
        id:2,
        name:"Sepatu",
        price:"500.000",
        imgSrc:"https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.1294571741.1695009696&semt=sph",
        imgAlt:"shoes",
        description:"Sepatu dengan kualitas yang bagus dan sangat diminati oleh kalangan muda, Yuk beli sepatu ini dijamin anda kan bahagia selalu"
    },
    {
        id:3,
        name:"Sepatu",
        price:"600.000",
        imgSrc:"https://img.freepik.com/premium-vector/shoe-illustration-vector_492281-2504.jpg?size=626&ext=jpg&ga=GA1.1.1294571741.1695009696&semt=sph",
        imgAlt:"shoes",
        description:"Sepatu dengan kualitas yang bagus dan sangat diminati oleh kalangan muda, Yuk beli sepatu ini dijamin anda kan bahagia selalu"
    },
    {
        id:4,
        name:"Sepatu",
        price:"800.000",
        imgSrc:"https://t3.ftcdn.net/jpg/01/21/81/86/240_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg",
        imgAlt:"shoes",
        description:"Di jual sepatu dengan gradasi warna putih hitam merah, beli sepatu ini dijamin bakal happy selalu"
    },
    {
        id:5,
        name:"Sepatu",
        price:"750.000",
        imgSrc:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ad763b174276193.Y3JvcCw5NzAsNzU4LDUwNCwxNDQ.jpg",
        imgAlt:"shoes",
        description:"Di jual sepatu dengan gradasi warna putih hitam merah, beli sepatu ini dijamin bakal selalu semangat dalam menjalani hari hari bersama"
    }
]


const email=localStorage.getItem("email")

const ProductPages=()=>{
    const handleLogOut=()=>{
        alert("Terima Kasih");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href="/login"
    }
    return(
       <Fragment>
        <div className="flex justify-end items-center bg-blue-700 text-white pr-10 py-[15px]">
            {email}
            <Button classname="bg-red-700" content="Logout" onClick={handleLogOut} />
        </div>
         <div className="flex justify-center py-5 px-3 gap-5 flex-wrap">
            {
                product.map((item)=>(
                    <CardProduct key={item.id}>
                        <CardProduct.Header imgAlt={item.imgAlt} imgSrc={item.imgSrc} />
                        <CardProduct.Body productName={item.name}>
                        {item.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={item.price}/>
                    </CardProduct>
                  ))
            }
        </div>
       </Fragment>
    )
}

export default ProductPages;