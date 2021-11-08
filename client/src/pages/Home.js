import React from "react";
import './styles/home.css'
import { AiOutlinePlus} from "react-icons/ai"
import FoodItem from "../component/FoodCard";
const Home = () => {
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
                      <button className="text-white text-sm border-none w-24 inline-block">Delivery</button>
                    </span>
                    <button className="p-1 text-sm w-24 pickup">Pickup</button>
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
                <h1 className="cursor-pointer">Add items <AiOutlinePlus className="inline" /></h1>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <FoodItem pizzaname={'Margarita A'}
              pizzarate={412.00}
              pizzaqty={2}
              pizzadescription={"crab & cucumber"} />
            <FoodItem pizzaname={'Margarita B'}
              pizzarate={112.00}
              pizzaqty={1}
              pizzadescription={"tuna & cucumber"} />
            <FoodItem pizzaname={'Margarita B'}
              pizzarate={112.00}
              pizzaqty={3}
              pizzadescription={"smoked salmon over rice"} />
          </div>
        </div>
      </>
    )
}

export default Home;