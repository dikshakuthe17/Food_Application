import React from "react";
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";


export const categories  = [
    {
        id:1,
        name:"All",
        image: <TiThSmallOutline className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id:3,
        name:"soups",
        image: <TbSoup className="w-[60px] h-[60px] text-orange-600" />

    },
    {
        id:4,
        name:"pasta",
        image:<CiBowlNoodles className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id:5,
        name:"main_course",
        image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza className="w-[60px] h-[60px] text-orange-600" />
    },
    {
        id:7,
        name:"burger",
        image:<FaHamburger className="w-[60px] h-[60px] text-orange-600" />
    }


]