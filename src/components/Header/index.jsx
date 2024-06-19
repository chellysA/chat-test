import React from "react"
import { HiUsers } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const Header =({phoneNumber})=> {
    return (
        <header className="bg-primary w-full h-full px-3 py-2 flex justify-between">
            <div className="flex items-center">
                <div className="h-10 w-10 flex justify-center items-center rounded-full bg-secondary mr-4"><HiUsers className="h-6 w-6 text-white"/></div>
                <p className="text-black">{phoneNumber}</p>
            </div>
            <div className="flex items-center">
                <IoSearchSharp className="text-grey h-5 w-5 mr-8"/>
                <SlOptionsVertical className="text-grey h-4 w-4 mr-4"/>
            </div>
        </header>
    )
}

export default Header