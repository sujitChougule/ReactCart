import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
const img1="https://m.media-amazon.com/images/I/31ilq3hPhEL._SY445_SX342_QL70_FMwebp_.jpg";
const img2="https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/fP6hkTA0RhhWJU3XvQInnH6mm60=/768x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/ZXVUNVEUOZMGAMBY2XOJ6KBKCE.jpg"
const img3="https://m.media-amazon.com/images/I/617sGSjmC1L._AC_SY300_SX300_.jpg"
const productList=[
    {name:"Mac Book",
     price: 120000,
     imgSrc:img1,
     id:"L1"
    },
    {name:"Shoes",
    price: 490,
    imgSrc:img2,
    id:"S1"
   },{name:"GoPro",
   price: 420,
   imgSrc:img3,
   id:"C1"
  },{name:"OnePlus9",
  price: 339.99,
  imgSrc:"https://m.media-amazon.com/images/I/81ZEdtYBYfL._AC_UF894,1000_QL80_FMwebp_.jpg",
  id:"M1"
 },{name:"Panasonic LUMIX",
 price: 597,
 imgSrc:"https://m.media-amazon.com/images/I/81BCS8w0v9L._AC_UF894,1000_QL80_FMwebp_.jpg",
 id:"C2"
},{name:"Vision Figure 1",
price: 12,
imgSrc:"https://m.media-amazon.com/images/I/51Y9LwtsaVL._AC_UF894,1000_QL80_FMwebp_.jpg",
id:"X1"
},{name:"Nike Air Jordan 1",
price: 399,
imgSrc:"https://m.media-amazon.com/images/I/61lHu4-ESDS._AC_UF1000,1000_QL80_FMwebp_.jpg",
id:"S2"
},{name:"Rado Centrix Diamond",
price: 941.91,
imgSrc:"https://m.media-amazon.com/images/I/816xoefubuL._AC_UF1000,1000_QL80_FMwebp_.jpg",
id:"W1"
},{name:"Samsang start tv",
price: 399,
imgSrc:"https://m.media-amazon.com/images/I/619GhhC0bIL._AC_SX679_.jpg",
id:"T1"
},{name:"Sony smart tv",
price: 999,
imgSrc:"https://m.media-amazon.com/images/I/91HwNoF+fAL._AC_SX466_.jpg",
id:"T2"
},{name:"KAMARUI pro mini pc",
price: 269,
imgSrc:"https://m.media-amazon.com/images/I/61TSOgyCqRL._AC_UF894,1000_QL80_FMwebp_.jpg",
id:"P3"
}
];

 const dispatch =useDispatch()

  const addToCartHandler=(options)=>{
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice"});

    toast.success("Added to cart");
  };
  return (
    <div className='home'>
        {productList.map((i)=> (
                <ProductCard 
                key={i.id} 
                imgSrc={i.imgSrc} 
                name={i.name} 
                price={i.price}
                id={i.id}
                handler={addToCartHandler}
                />
            ))}
    </div>
  );
};

const ProductCard =({name, id, price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>


    </div>
)

export default Home