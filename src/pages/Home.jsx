import React from "react";
import { UserContext } from "../context/UserContext";
import Nav from "../components/Nav";
import { categories } from "../components/Category";
import Card from "../components/Card";
import { food_items } from './../food';
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";


export const Home = () => {

  const { category, setCategory, inputValue, showSidebar,
    setShowSidebar } = React.useContext(UserContext);

  // filter category wise
  function filterCategory(category) {
    if (category === "All") {
      setCategory(food_items);
      return;
    }
    const filtered = food_items.filter((item) => item.food_category === category);
    setCategory(filtered);
  }

   const items = useSelector((state) => state.cart.items);
  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryCharge = 20; // Fixed delivery charge
  const tax = subtotal * 0.5/100; // Assuming 10% tax
  const total = subtotal + deliveryCharge + tax;

  return (
    <div className="bg-slate-200 w-full min-h-[100vh]">
      <Nav />
      {/* show category if input value is not empty and do not show if seraching */}
      {inputValue === "" && (
        <div>
          <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
            {categories.map((item) => {
              
              return (
                <div className="w-[120px] h-[120px] flex flex-col shadow-xl  rounded-lg items-center justify-center bg-white gap-2 text-20px text-gray-600 font-semibold hover:bg-orange-200 cursor-pointer transition-all duration-200"
                 onClick={() => filterCategory(item.name)} key={item.name}>
                  {item.image}
                  {/* {item.name} */}
                </div>
              );
            })}
          </div>
          <div className="  pt-8 pb-8 w-full flex flex-wrap gap-5 px-5 justify-center items-center">
            {category.map((item) => {
              return (
                <Card key={item.id} id={item.id} image={item.food_image} name={item.food_name} type={item.food_type} price={item.price}  />
              );
            })}
          </div>
        </div>
      )}
      {/* show all items when searching */}
      {inputValue !== "" && (
        <div className="pt-8 pb-8 w-full flex flex-wrap gap-5 px-5 justify-center items-center">
          {category.map((item) => {
            return (
              <Card key={item.id} id={item.id} image={item.food_image} name={item.food_name} type={item.food_type} price={item.price} />
            );
          })}
        </div>


      )}
      {/* Order Summary */}
      <div className=" w-full md:w-[40vw] h-[100vh] shadow-xl fixed top-0 right-0 bg-white p-6 " style={{ transform: showSidebar ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out' }}>
        <header className="flex justify-between items-center  ">
          <span className="text-orange-500 text-[18px]  font-semibold">
            Order items
          </span>

          <RxCross2 className="cursor-pointer w-6 h-6 text-orange-400 text-[18px] font-bold hover:text-gray-600" onClick={() => setShowSidebar(false)} />

        </header>
        {/* Order items */}
        <div className="w-full mt-8 flex flex-col gap-8"> 
          {items.map((item) => {
            return (
              <Card2
                key={item.id}
                id={item.id} // <-- Pass id here!
                image={item.image}
                name={item.food_name}
                type={item.food_type}
                price={item.price}
                qty={item.qty}
              />
            );
          })}
        </div>
        {/* total price */}
        <div className="w-full border-t-2 border-gray-400 flex flex-col mt-5">
          <div className="flex justify-between">
            <span >
              Subtotal
            </span>
            <span>
              RS 500
            </span>
          </div>
          <div className="flex justify-between">
              <span>deliveryCharge</span>
              <span>20</span>
            </div>
          <div className="flex justify-between">
              <span>
                Tax
              </span>
              <span>
                10%
              </span>
            </div>
           
        </div>
        
        
      </div>
      {/* footer */}
      <footer className="w-full h-[60px] flex justify-center items-center border-t-2 border-gray-400">
        <span className="text-gray-600 font-semibold text-[18px]">© 2025 Food Ordering App</span>
      </footer>
    </div>
  );
};