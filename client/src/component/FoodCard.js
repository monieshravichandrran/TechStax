import React from "react";
import '../pages/styles/home.css'
const FoodItem = (props) => {
    return (
        <>
          <div className="flex justify-center">
            <div className="w-5/6 inline">
              <div className="flex float-left inline">
                <h1 className="bg-red-500 box text-white h-8 w-8">{props.pizzaqty} </h1>
                <h1 className="ml-2 rate text-xl"> <i>{props.pizzaname}</i></h1>
              </div>
              <div className="flex float-right">
                <h1>&#8377; {props.pizzarate}</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-4/5 desc">
              <div className="flex justify-left font-mulish text-sm">
                {props.pizzadescription}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <hr className="w-5/6 flex justify-center mb-2"/>
          </div>
        </>
    )
}

export default FoodItem;