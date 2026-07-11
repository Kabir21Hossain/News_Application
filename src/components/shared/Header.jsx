
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {

    return (
        <div className='space-y-4 flex  flex-col justify-center items-center w-full py-8'>
            <Image src={logo} width={300} height={200} alt="logo" className='mx-auto'></Image>
            <p className='text-md font-medium text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-md font-medium text-gray-500'>{format(new Date(), "EEEE,MMM dd,yyyy")}</p>
        </div>
    )
}

export default Header;