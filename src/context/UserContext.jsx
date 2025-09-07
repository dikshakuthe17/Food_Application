import React,{createContext , useState} from 'react'

import { food_items } from './../food';

// this is the user context to manage global state
export const UserContext = createContext()


// this is the user context provider to manage global state and provide it to the components
  const UserContextProvider = ({ children }) => {
  const [category, setCategory] = useState(food_items);

  // this is the search input state for the navigation bar
    const [inputValue, setInputValue] = useState("");

    // for showing and hiding right side bar
    const [showSidebar, setShowSidebar] = useState(false);

    const data = {
        inputValue,
        setInputValue,
        category,
        setCategory,
        showSidebar,
        setShowSidebar
    }

  return (
    <div>
      <UserContext.Provider value={data}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider