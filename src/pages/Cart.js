import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  useTitle("Cart");

  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  //   {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  // ]
  const cartData = useSelector(store => store.cartState);



  return (
    <main>
      <section className="cart">
        {/* <h1>Cart Items: {cartData.length}</h1> */}
        {
          cartData.cartlist.length > 0 ?
            <h1>Cart Items:{cartData.total} </h1>
            :
            <h1 style={{ color: "red" }}>No Item Has Been Selected </h1>

        }
        {cartData.cartlist.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
