// import { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import Slider from "./Slider";
import { ReactComponent as Minus } from "../assets/icon-minus.svg";
import { ReactComponent as Plus } from "../assets/icon-plus.svg";
import { ReactComponent as CartSvg } from "../assets/icon-cart.svg";

// import all
const images = [
  {
    url: product1,
    alt: "product1",
  },
  {
    url: product2,
    alt: "product2"
  },
  {
    url: product3,
    alt: "product3"
  },
  {
    url: product4,
    alt: "product4"
  },
];


function Main({setCartItem, setAmount, amount}) {

  function increase () {
    setAmount(prevVal => prevVal + 1);
  }

  function decrease () {
    if(amount === 1) {
      setCartItem({});
      setAmount(0);
      return
    }
    setAmount(prevVal => prevVal - 1);
  }

  const item1 = {
    brandName: "Fall Limited Edition Sneakers",
    price: 125,
    url: product1,
    alt: "product1"
  }

  function addToCart () {
    if (amount !== 0) {
      setCartItem(item1);
    }
    return
  }

  return (
    <div>
      <Slider images={images} />
      <div className="info">
        <h3 className="company-name">Sneaker company</h3>
        <h1 className="brand-name">Fall Limited Edition Sneakers</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt voluptates repellat deleniti praesentium reiciendis sit, totam aliquam delectus optio quo ea quasi quidem asperiores placeat laboriosam odit. A, quo!</p>
        <div className="price">
          <span className="new-price">${item1.price}.00</span> <span className="discount">50%</span> <span className="old-price">$250.00</span>
        </div>
        <div className="amount">
          <Minus className="minus" onClick={decrease}/>{amount}<Plus className="plus" onClick={increase}/>
        </div>
        <button className="addCartBtn" onClick={addToCart}><CartSvg />Add to cart</button>
      </div>
    </div>
  )
}

export default Main