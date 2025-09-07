import React from 'react'
// import image from "../assets";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice.js';

const Card = ({id, name, type, image, price }) => {
    const dispatch = useDispatch();
    return (
        <div className='w-[250px] h-[350px] bg-white  rounded-lg shadow-lg p-3 flex flex-col gap-3 transition hover:scale-105 hover:border-2 border-orange-300'>
            <div className='w-[100%] h-[60%] overflow-hidden'><img src={image} alt="" className='object-cover' /></div>
            <div className=' text-2xl font-semibold'>{name}</div>
            <div className='flex justify-between w-full items-center'>
                <div className='text-orange-500 text-lg font-bold'>RS {price}/-</div>
                <div className='flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold'> {type === "veg"?<LuLeafyGreen className='' />:<GiChickenOven />}<span>{type}</span></div>
            </div>
            <button className='w-full bg-orange-600 text-white py-2 cursor-pointer rounded-lg hover:bg-orange-400 transition-all duration-200 ' onClick={() => dispatch(addToCart({ id, name, image, price,qty:1 }))}>Add to dish</button>
        </div>
    )
}

export default Card