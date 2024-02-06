import ThemeToggle from "./ThemeToggle";
import { GiGiftOfKnowledge } from "react-icons/gi";
const SidebarHeader = () => {
 return (
  <div className='flex items-center mb-4 gap-4 px-4 '>
   <GiGiftOfKnowledge className='w-10 h-10 text-primary-500' />

   <h2 className='text-xl font-extrabold text-primary mr-auto '>
    PurpleCat GPT
   </h2>
   <ThemeToggle />
  </div>
 );
};

export default SidebarHeader;
