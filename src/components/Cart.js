import { ReactComponent as Delete } from "../assets/icon-delete.svg";

function Cart({ item, setCartItem, amount, setAmount }) {

  function deleteItem() {
    setAmount(0);
    setCartItem({});
  }


  return (
    <div>
      <span className="cart-header">Cart</span>
      <hr />
      {Object.keys(item).length === 0 ? "Your cart is empty" :
        <div className="cart-body">
          <div className="cart-info">
            <img className="cart-img" src={item.url} alt={item.alt} />
            <div className="price-description">
              <p>{item.brandName}</p>
              <p>{item.price}.00 x {amount} <span style={{fontWeight: "700", display: "inline"}}>{item.price * amount}.00</span></p>
            </div>
            <Delete className="delete-btn" style={{cursor: "pointer"}} onClick={deleteItem} />
          </div>
          <button className="checkout">Checkout</button>
        </div>}
    </div>
  )
}

export default Cart