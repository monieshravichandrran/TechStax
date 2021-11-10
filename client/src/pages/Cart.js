import React, { useState } from "react";
import './styles/home.css'
import { AiOutlinePlus } from "react-icons/ai"
import FoodItem from "../component/FoodCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
const Cart = () => {
  let id = 0;
  const state = useSelector((state) => state)
  let Subtotal=state.items.subtotal
  console.log(state)
  const pizzas = [
    {
      item: state.items.item1,
      rate: state.items.rate1,
      name: "Margarita A",
      desc: "crab & cucumber"
    },
    {
      item: state.items.item2,
      rate: state.items.rate2,
      name: "Margarita B",
      desc: "tuna & cucumber"
    },
    {
      item: state.items.item3,
      rate: state.items.rate3,
      name: "Margarita C",
      desc: "smoked salmon over rice"
    },
    {
      item: state.items.item4,
      rate: state.items.rate4,
      name: "Margarita D",
      desc: "olives with red sauce"
    },
    {
      item: state.items.item5,
      rate: state.items.rate5,
      name: "Margarita E",
      desc: "roasted with paneer"
    }
  ]
  const [delivery, setDelivery] = useState(true);
  if (delivery)
    return (
      <>
        <div className="h-screen w-screen">
          <div className="flex justify-center mt-5">
            <div className="h-30 p-5 w-5/6 border-l-2 border-r-2 border-b-2 shadow-xl">
              <div className="flex justify-center font-bold text-3xl">
                TSX PIZZERIAS
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex justify-center">
                  <div className="border-2 rounded-3xl">
                    <span className="border-2 p-1 rounded-3xl inline-block bg-black inline">
                      <button className="text-white text-sm border-none w-24 inline-block" onClik={() => {
                        setDelivery(true)
                      }}>Delivery</button>
                    </span>
                    <button className="p-1 text-sm w-24 pickup" onClick={() => {
                      setDelivery(false)
                    }}>Pickup</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <p className="mx-8">25mins </p>
                <p className="mx-8">&#8377;20</p>
                <p className="mx-8">Discounts</p>
              </div>
              <div className="flex justify-center mt-5">
                <p>Menu Hours: 10:00am to 11:00pm</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-5/6 inline">
              <div className="float-left inline font-bold">
                <h1 className="inline cursor-pointer">Your Order</h1>
              </div>
              <div className="flex float-right font-bold inline text-red-500">
                <Link to="/">Add items <AiOutlinePlus className="inline" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {
              pizzas.map((food) => {
                id++;
                if (food.item > 0) {
                  return <FoodItem key={id}
                    pizzaname={food.name}
                    pizzarate={food.rate}
                    pizzaqty={food.item}
                    pizzadescription={food.desc}/>
                }
              })  
            }
          </div>
          <div className="flex justify-center text-xl font-bold">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1 className="sum">Summary</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Subtotal</h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; {Subtotal.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Discount</h1>
              </div>
              <div className="flex float-right">
                <h1 className="text-green-500">- &#8377; {Subtotal*0.15.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Delivery Fee</h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; 20.00</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Taxes</h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; {Subtotal*0.20.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-xl">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1 className="font-bold">Total</h1>
              </div>
              <div className="flex float-right font-bold">
                <h1>&#8377; {(Subtotal*1.05+20).toFixed(2)}</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="butto bg-black w-full h-10 text-white font-mulish font-bold">PAY NOW</button>
      </>
    )
  else {
    return (
      <>
        <div className="h-screen w-screen">
          <div className="flex justify-center mt-5">
            <div className="h-30 p-5 w-5/6 border-l-2 border-r-2 border-b-2 shadow-xl">
              <div className="flex justify-center font-bold text-3xl">
                TSX PIZZERIAS
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex justify-center">
                  <div className="border-2 rounded-3xl bg-black">
                    <span className="border-2 p-1 rounded-3xl inline-block bg-white inline">
                      <button className="text-sm border-none w-24 bg-white inline-block rounded-l-xl" onClick={() => {
                        setDelivery(true)
                        console.log(delivery)
                      }}>Delivery</button>
                    </span>
                    <button className="p-1 bg-black text-white text-sm w-24 rounded-xl" onClick={() => {
                      setDelivery(false)
                      console.log(delivery)
                    }}>Pickup</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <p className="mx-8">25mins </p>
                <p className="mx-8">&#8377;20</p>
                <p className="mx-8">Discounts</p>
              </div>
              <div className="flex justify-center mt-5">
                <p>Menu Hours: 10:00am to 11:00pm</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-5/6 inline">
              <div className="float-left inline font-bold">
                <h1 className="inline cursor-pointer">Your Order</h1>
              </div>
              <div className="flex float-right font-bold inline text-red-500">
                <Link to="/">Add items <AiOutlinePlus className="inline" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {
              pizzas.map((food) => {
                id++;
                if (food.item > 0) {
                  return <FoodItem key={id}
                    pizzaname={food.name}
                    pizzarate={food.rate}
                    pizzaqty={food.item}
                    pizzadescription={food.desc} />
                }
              })
            }
          </div>
          <div className="flex justify-center text-xl font-bold">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1 className="sum">Summary</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Subtotal</h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; {Subtotal.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Discount</h1>
              </div>
              <div className="flex float-right">
                <h1 className="text-green-500">- &#8377; {Subtotal*0.15.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-lg">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1>Taxes</h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; {Subtotal*0.20.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-xl">
            <div className="w-5/6">
              <div className="flex float-left">
                <h1 className="font-bold">Total</h1>
              </div>
              <div className="flex float-right font-bold">
                <h1>&#8377; {1.05*Subtotal.toFixed(2)}</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="butto bg-black w-full h-10 text-white font-mulish font-bold">PAY NOW</button>
      </>
    )
  }
}

export default Cart;