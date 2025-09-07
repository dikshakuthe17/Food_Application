import React from 'react'

import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice.js';


const Card2 = ({ image, name, qty, price ,id}) => {
    const dispatch = useDispatch();
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
            {/* left div */}
            {/* image of dish that we order */}
            <div className='w-[60%] h-full  flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img src={image} alt="" className=' object-cover' />
                </div>
            
            <div className='w-[40%] h-full flex flex-col gap-1 px-8'>
                {/*  name  of the dish we order  */}
                <div className='text-lg text-gray-600 font-semibold '>{name}</div>
                {/* quantity selector */}
                <div className='w-[110px] h-[50px] bg-slate-400 text-xl shadow-lg flex font-semibold rounded-lg overflow-hidden border border-orange-500'> 
                    <button className='w-[30%] text-orange-400 h-full bg-white hover:bg-gray-200  flex justify-center items-center'>-</button>
                    <span className='w-[40%] text-orange-400 h-full bg-slate-200 flex justify-center items-center '>{qty}</span>
                    <button className='w-[30%] text-orange-400 h-full bg-white hover:bg-gray-200 flex justify-center items-center'>+</button>
                </div>
                </div>
            </div>
            {/* right div */}
            <div className='gap-6  flex flex-col justify-start items-end'>
                {/* total price of the dish we order */}
                <span className='text-xl text-orange-400 font-semibold '>Rs {price * qty}/-</span>
                <RiDeleteBinFill className=' text-red-600 w-[30px] h-[30px] cursor-pointer' onClick={() =>dispatch(removeFromCart({ id }))} />
            </div>
        </div>
    )
}

export default Card2