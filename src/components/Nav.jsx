import React, { useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { food_items } from '../food';
import { useSelector } from 'react-redux';



const Nav = () => {
  // this is the navigation bar
  const { inputValue, setInputValue, category, setCategory, showSidebar,
    setShowSidebar } = React.useContext(UserContext);

  useEffect(() => {

  // this is the search functionality
    const newlist = food_items.filter((item) => {
      return item.food_name.includes(inputValue) || item.food_name.toLowerCase().includes(inputValue);
    });
    setCategory(newlist);
  }, [inputValue]);

  //  get cart items from redux store
  const items = useSelector((state) => state.cart.items);
  // console.log(items);


  return (
    <nav className='w-[100%] h-[100px] flex items-center justify-between px-8'>
        <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl '>
        <MdFastfood className='w-[30px] h-[30px] text-orange-500 transition-all duration-200 hover:scale-110'/> 
        </div>
        <form className=' w-[40%] md:w-[60%] h-[60px] bg-white flex items-center gap-2 px-4   rounded-md shadow-xl ' onSubmit={(e) => e.preventDefault()}>
              <IoIosSearch className='  w-[20px] h-[20px] text-orange-500 ' />
              <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Search Itmes...' className='w-[100%] h-[100%] outline-none rounded-md px-2 font-[500]' />

        </form>
      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative' onClick={() => setShowSidebar(true)}>
        <span className='absolute -top-2 -right-2 w-[20px] h-[20px] bg-orange-500 text-white flex items-center justify-center font-bold rounded-full text-[12px] font-[500]'>{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-orange-500 cursor-pointer' />
          </div>
    </nav>
  )
}

export default Nav