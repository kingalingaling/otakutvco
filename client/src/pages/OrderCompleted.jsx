import success from "/assets/images/success.svg";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const OrderCompleted = () => {
  useEffect(()=>{
    document.title = "Order Complete"
  })

    const navigate = useNavigate()
  return (
    <div className="w-full md:w-[70%] mx-auto h-[100vh] flex flex-col justify-center items-center">
        <img src={success} alt="" className="w-[400px]" />
        <p className="my-4 px-8 text-center">Your Order has been confirmed</p>
        <button
        onClick={() => navigate('/')}
          className="bg-red-500 mt-4 flex mx-auto py-3 px-5 rounded-md text-lg font-bold duration-500 border text-white hover:text-red-500 hover:border-red-500 hover:bg-white"
        >
          Return Home
        </button>
    </div>
  )
}

export default OrderCompleted