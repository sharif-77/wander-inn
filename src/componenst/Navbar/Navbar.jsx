import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOutUser}=useContext(AuthContext)
    console.log(user);
    return(
        <div className="py-6">

            <div className="w-4/5 mx-auto flex flex-col gap-10 lg:flex-row lg:gap-0 items-center justify-between">

                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="w-16 rounded-full" src="https://i.ibb.co/2NZJyW9/3d7581-6a6d532daaa743f08b822f674fd45f29-mv2-1.png" alt="" />
                    <span className="text-xl font-bold uppercase ">WanderInn</span>
                    
                </div>
                
               <div className="uppercase">
               <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Home</NavLink>
                <NavLink to='/rooms' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Rooms</NavLink>
                <NavLink to='/myBookings' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>My Bookings</NavLink>
               </div>

               <div className="flex items-center gap-4 ">
               <div className="avatar">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?user?.photoURL:"https://i.ibb.co/s2hVRQm/user.png"} />
                </div>
                </div>

                {
                    user?<button  onClick={()=>logOutUser()} className="py-2 px-5 rounded-md font-bold btn" >Logout</button>:<NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Login</NavLink>
                }


               </div>
               

            </div>
    
        </div>
    )}
export default Navbar;