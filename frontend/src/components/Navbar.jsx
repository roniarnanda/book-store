import { Link } from 'react-router-dom';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import avatarImg from '../assets/avatar.png';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/user-dashboard' },
  { name: 'Orders', href: '/orders' },
  { name: 'Cart Page', href: '/cart' },
  { name: 'Check Out', href: '/checkout' },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUSer = true;
  const logout = true;

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-8 py-6">
      <nav className="flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiOutlineBars3CenterLeft className="size-6" />
          </Link>

          {/* Search */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoIosSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search Me"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-8 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUSer ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${currentUSer} ring ring-blue-500 `}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                {' '}
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
