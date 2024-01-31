import React from "react";
import { IoSearchSharp, IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return <>

<header className='header'>
            <div className='header__logo'>
              <IoSettingsSharp className='header__logo_icon bg-blue-600 ' />
              <h1 style={{fontWeight : "bold", fontSize : "1.7rem"}}>ZinTools</h1>
            </div>

            {/* header input */}
            <div className='header__input'>
              <form action='' className='header_form'>
                <input
                className="border-r"
                  type='text'
                  placeholder='Search For Movies, TV Shows , Themes and Cast'
                />
                <IoSearchSharp className='header__form_icon ' />
              </form>
            </div>

            {/* header button */}
            <div>
              <button style={{fontWeight : 'bold '}}>Log in</button>
              <button className='header__button'>Sign up</button>
            </div>
          </header>
  </>;
};

export default Header;
