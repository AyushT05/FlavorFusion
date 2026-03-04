import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex bg-gray-50 min-h-screen">
                
                <Sidebar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between py-5 w-full max-h-[80px] px-11 bg-white shadow-md rounded-t-lg'>
                        <h3 className='font-medium text-lg text-gray-800'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} height={40} alt='Profile Icon' className='rounded-full' />
                    </div>
                    <div className='flex-grow p-6'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}