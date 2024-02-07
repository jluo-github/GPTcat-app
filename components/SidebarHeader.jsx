import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { BsChatText } from "react-icons/bs";
const SidebarHeader = () => {
 return (
  <div className='flex items-center mb-4 gap-4 px-4 '>
   {/* <BsChatText className='w-10 h-10 text-primary-500' /> */}
   <Image
    src='/cat10.png'
    width={50}
    height={50}
    className='w-10 h-10 text-primary-500'
   />

   <h2 className='text-xl font-extrabold text-primary mr-auto '>
    PurpleCat GPT
   </h2>
   <ThemeToggle />
  </div>
 );
};

export default SidebarHeader;
