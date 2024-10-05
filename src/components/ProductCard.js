import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice"
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;
  const cartList = useSelector(state => state.cartState.cartlist);
  const [incart, setIncart] = useState(false);
  useEffect(() => {

    const productInCart = cartList.find(item => item.id === product.id)

    if (productInCart) {
      setIncart(true)
      console.log(productInCart);
    } else {
      setIncart(false)
    }


  }, [cartList, product])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          incart ?
            <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
            :
            <button onClick={() => dispatch(add(product))}>Add To Cart</button>

        }
      </div>
    </div>
  )
}
