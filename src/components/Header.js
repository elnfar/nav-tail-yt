import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1>e <span className='block text-4xl'>Tail</span></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Testimonials</Link></li>
                    <li><Link to='/'>Information</Link></li>
                    <li><Link to='/'>Jobs</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>

        </nav>

    </div>
  );
};

export default Header;
