import React,{useState} from "react";
import marg1 from "../images/marg1.jpg"
import marg2 from "../images/marg2.jpg"
import marg3 from "../images/marg3.jpg"
import marg4 from "../images/marg4.jpg"
import marg5 from "../images/marg5.jpg"
import { history } from "../history";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {useSelector,useDispatch} from "react-redux"
const Home = () => {
    const dispatch = useDispatch()
    const [m1, setM1] = useState(0);
    const [m2, setM2] = useState(0);
    const [m3, setM3] = useState(0);
    const [m4, setM4] = useState(0);
    const [m5, setM5] = useState(0);
    const [r1, setR1] = useState(0);
    const [r2, setR2] = useState(0);
    const [r3, setR3] = useState(0);
    const [r4, setR4] = useState(0);
    const [r5, setR5] = useState(0);
    const ClickHandler = (event) => {
        event.preventDefault()
        dispatch({
            type: "ITEM",
            payload: {
                item1: m1,
                rate1: r1,
                item2: m2,
                rate2: r2,
                item3: m3,
                rate3: r3,
                item4: m4,
                rate4: r4,
                item5: m5,
                rate5: r5
            }
        })
        history.push("/cart")
    }
    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="h-30 p-5 w-5/6 border-l-2 border-r-2 border-b-2 shadow-xl">
                    <div className="flex justify-center font-bold text-3xl">
                        TSX PIZZERIAS
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
            <div class="flex justify-center my-6">
                <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div class="flex-1">
                        <table class="w-full text-sm lg:text-base" cellspacing="0">
                            <thead>
                                <tr class="h-12 uppercase">
                                    <th class="hidden md:table-cell"></th>
                                    <th class="text-left">Pizza Name</th>
                                    <th class="lg:text-right text-left pl-5 lg:pl-0">
                                        <span class="lg:hidden" title="Quantity">Qtd</span>
                                        <span class="hidden lg:inline">Quantity</span>
                                    </th>
                                    <th class="hidden text-right md:table-cell">Unit price</th>
                                    <th class="text-right">Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mt-3">
                                    <td class="hidden pb-4 md:table-cell">
                                        <img src={marg1} class="w-20 rounded" alt="Thumbnail"/>
                                    </td>
                                    <td>
                                        <p class="mb-2 md:ml-4">Margarita 1</p>
                                        <small>Crab and Cucumber</small>
                                    </td>
                                    <td class="justify-center md:justify-end md:flex mt-6">
                                        <div class="w-20 h-10">
                                            <div class="relative flex flex-row w-full h-8">
                                                <button onClick={() => {
                                                    if (m1 > 0) {
                                                        setM1(m1 - 1)
                                                        setR1((m1 - 1) * 206.00)
                                                    }
                                                }}><AiFillMinusCircle className="text-2xl mr-1" /></button> {m1} <button onClick={() => {
                                                    setM1(m1 + 1)
                                                    setR1((m1+1)*206.00)
                                                }}><AiFillPlusCircle className="ml-1 text-2xl"/></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="hidden text-right md:table-cell">
                                        <span class="text-sm lg:text-base font-medium">
                                            206.00 &#8377;
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="text-sm lg:text-base font-medium">
                                            {r1} &#8377;
                                        </span>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td class="hidden pb-4 md:table-cell">
                                        <img src={marg2} class="w-20 rounded" alt="Thumbnail"/>
                                    </td>
                                    <td>
                                        <p class="mb-2 md:ml-4">Margarita 2</p>
                                            <small>tuna and cucumber</small>
                                    </td>
                                    <td class="justify-center md:justify-end md:flex md:mt-4">
                                        <div class="w-20 h-10">
                                            <div class="relative flex flex-row w-full h-8">
                                                <button onClick={() => {
                                                    if (m2 > 0) {
                                                        setM2(m2 - 1)
                                                        setR2((m2 - 1) * 112.00)
                                                    }
                                                }}><AiFillMinusCircle className="text-2xl mr-1" /></button> {m2} <button onClick={() => {
                                                    setM2(m2 + 1)
                                                    setR2((m2+1)*112.00)
                                                }}><AiFillPlusCircle className="ml-1 text-2xl" /></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="hidden text-right md:table-cell">
                                        <span class="text-sm lg:text-base font-medium">
                                            112.00 &#8377;
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="text-sm lg:text-base font-medium">
                                            {r2} &#8377;
                                        </span>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td class="hidden pb-4 md:table-cell">
                                            <img src={marg3} class="w-20 rounded" alt="Thumbnail"/>
                                    </td>
                                    <td>
                                        <p class="mb-2 md:ml-4">Margarita 3</p>
                                        <small>smoked salmon over rice</small>
                                    </td>
                                    <td class="justify-center md:justify-end md:flex md:mt-8">
                                        <div class="w-20 h-10">
                                            <div class="relative flex flex-row w-full h-8">
                                                <button onClick={() => {
                                                    if (m3 > 0) {
                                                        setM3(m3 - 1)
                                                        setR3((m3 - 1) * 409)
                                                    }
                                                }}><AiFillMinusCircle className="text-2xl mr-1" /></button> {m3} <button onClick={() => {
                                                    setM3(m3 + 1)
                                                    setR3((m3+1)*409)
                                                }}><AiFillPlusCircle className="ml-1 text-2xl" /></button>
                                            </div>
                                        </div>

                                    </td>
                                    <td class="hidden text-right md:table-cell">
                                        <span class="text-sm lg:text-base font-medium">
                                            409.00 &#8377;
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="text-sm lg:text-base font-medium">
                                            {r3} &#8377;
                                        </span>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td class="hidden pb-4 md:table-cell">
                                        <img src={marg4} class="w-20 rounded" alt="Thumbnail" />
                                    </td>
                                    <td>
                                        <p class="mb-2 md:ml-4">Margarita 4</p>
                                        <small>filled with olives</small>
                                    </td>
                                    <td class="justify-center md:justify-end md:flex md:mt-8">
                                        <div class="w-20 h-10">
                                            <div class="relative flex flex-row w-full h-8">
                                                <button onClick={() => {
                                                    if (m4 > 0) {
                                                        setM4(m4 - 1)
                                                        setR4((m4 - 1) * 313)
                                                    }
                                                }}><AiFillMinusCircle className="text-2xl mr-1" /></button> {m4} <button onClick={() => {
                                                    setM4(m4 + 1)
                                                    setR4((m4+1)*313)
                                                }}><AiFillPlusCircle className="ml-1 text-2xl" /></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="hidden text-right md:table-cell">
                                        <span class="text-sm lg:text-base font-medium">
                                            313 &#8377;
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="text-sm lg:text-base font-medium">
                                            {r4} &#8377;
                                        </span>
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td class="hidden pb-4 md:table-cell">
                                        <img src={marg5} class="w-20 rounded" alt="Thumbnail" />
                                    </td>
                                    <td>
                                        <p class="mb-2 md:ml-4">Margarita 5</p>
                                            <small>roasted with paneer</small>
                                    </td>
                                    <td class="justify-center md:justify-end md:flex md:mt-8">
                                        <div class="w-20 h-10">
                                            <div class="relative flex flex-row w-full h-8">
                                                <button onClick={() => {
                                                    if (m5 > 0) {
                                                        setM5(m5 - 1)
                                                        setR5((m5-1) * 176)
                                                    }
                                                }}><AiFillMinusCircle className="text-2xl mr-1" /></button> {m5} <button onClick={() => {
                                                    setM5(m5 + 1)
                                                    setR5((m5+1)*176)
                                                }}><AiFillPlusCircle className="ml-1 text-2xl" /></button>
                                            </div>
                                        </div>

                                    </td>
                                    <td class="hidden text-right md:table-cell">
                                        <span class="text-sm lg:text-base font-medium">
                                            176 &#8377;
                                        </span>
                                    </td>
                                    <td class="text-right">
                                        <span class="text-sm lg:text-base font-medium">
                                            {r5} &#8377;
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr class="pb-6 mt-6"/>
                    </div>
                </div>
            </div>
            <button className="butto bg-black w-full h-10 text-white font-mulish font-bold" onClick={ClickHandler}>PLACE ORDER</button>
        </>
    )
}

export default Home