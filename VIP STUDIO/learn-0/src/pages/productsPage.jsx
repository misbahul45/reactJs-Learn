import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";
import getProduct from "../services/product.service";
import { useLogin } from "../hooks/userLogin";

const ProductPages=()=>{
    const [card,setCard]=useState([]);
    const [totalprice,setTotalPrice]=useState(0);
    const [products,setProducts]=useState([]);
    const username=useLogin()
    useEffect(()=>{
        setCard(JSON.parse(localStorage.getItem("card"))||[])
    },[])
    useEffect(()=>{
        if(products.length>0&&card.length>0){
         const sum=card.reduce((acc,item)=>{
            const product=products.find((item)=>item.id===item.id)
                return acc+product.price*item.amount
         },0)
        setTotalPrice(sum)
        localStorage.setItem("card",JSON.stringify(card))
        }
    },[card])
    useEffect(()=>{
       getProduct((data)=>{
           setProducts(data)
           console.log(data)
       }) 
    },[])

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    //useRef 
    const handleToaddcard=(id)=>{
       if(card.find((item)=>item.id===id)){
          if(card.find((item)=>item.id===id)){
            setCard(
                card.map((item)=>item.id===id ? {...item,amount:item.amount+1}:item)
            )
              
          }
       }else{
           setCard([...card,{id,amount:1}])
       }
    }
    return(
       <Fragment>
        <div className="flex gap-5 items-center bg-blue-700 text-white pr-10 py-[15px]">
            <Button className="bg-red-700" content="Logout" onClick={handleLogOut} />
            <h1 className="text-2xl font-bold">{username}</h1>
        </div>
         <div className="flex w-full justify-between py-2">
            <div className="flex flex-wrap gap-2 justify-center flex-basis-2/3">
            {products.length>0 &&
                products.map((item)=>(
                    <CardProduct key={item.id}>
                        <CardProduct.Header  imgSrc={item.image} />
                        <CardProduct.Body prtitle={item.title}>
                        {item.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={item.price}  id={item.id} handleAddCard={handleToaddcard}/>
                    </CardProduct>
                  ))
            }
            </div>
            <div className="w-1/3">
                <h1 title="text-3xl bold text-blue-500 ml-5">Card</h1>
                <table title="text-left table-auto border-separate border-spacing-x-5">
                   <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                   </thead>
                   <tbody>
                        {products.length>0 &&
                            card.map((item)=>{
                           const product=products.find((product)=>product.id===item.id)
                          return(
                            <tr key={item.id}>
                                <td>{product.title}</td>
                                <td>{(product.price).toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</td>
                                <td>{item.amount}</td>
                                <td>{(item.amount * Number(product.price)).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
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