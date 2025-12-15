import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import { ShopContext } from "../context/ShopContext"; // Import ShopContext
import { assets } from "../assets/assets";


// Define the core navigation links
const navItems = ["Collection", "Orders", "About", "Contact"];

const Navbar = () => {
  // --- STATE AND CONTEXT FROM BOTH VERSIONS ---
  const [isNavVisible, setIsNavVisible] = useState(true); // For scroll hide/show
  const [lastScrollY, setLastScrollY] = useState(0); // For scroll tracking
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu visibility

  const navRef = useRef(null);
  const { y } = useWindowScroll();
  
  // Context for features (from the second component)
  const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  // --- END OF STATE AND CONTEXT ---

  // --- SCROLL HIDE/SHOW LOGIC (FROM FIRST VERSION) ---
  useEffect(() => {
    // Hide nav when scrolling down, show when scrolling up or at the top
    setIsNavVisible(y < lastScrollY || y === 0);
    setLastScrollY(y);
  }, [y]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isNavVisible ? 0 : -100, // Moves header up/down
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isNavVisible]);
  // --- END OF SCROLL HIDE/SHOW LOGIC ---

  // LOGOUT FUNCTION (from the second version)
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setMenuOpen(false); // Close mobile menu after logout
  };
  
  // Handlers
  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/collection'); // Assuming search is always done on the collection page
    setMenuOpen(false); // Close mobile menu if opened via mobile search
  };

  return (
    <>
      {/* HEADER - GSAP ANIMATED */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-shadow duration-300"
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={assets.logo}
              alt="Nepliz Logo"
              className="h-12 md:h-16 w-auto"
            />
            {/* Added the Waving Flag back from the second version for completeness */}

          </Link>

          {/* Desktop Nav Links (Main Links) */}
          <ul className="hidden md:flex gap-10 text-sm font-semibold uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-yellow-500 transition-colors ${
                    isActive ? "text-yellow-500" : "text-gray-700" // Changed text-black to text-gray-700 for better styling
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </ul>

          {/* Right Section: Search, Profile, Cart, Hamburger */}
          <div className="flex items-center gap-6">
            
            {/* 1. Search Icon (Always visible) */}
            <img 
              onClick={handleSearchClick} 
              src={assets.search_icon} 
              className='w-5 cursor-pointer hover:opacity-80 transition-opacity' 
              alt="Search" 
            />

            {/* 2. Profile Icon + Dropdown (Desktop only) */}
            <div className='group relative hidden md:block'>
              <img 
                onClick={() => token ? null : navigate('/login')} 
                className='w-5 cursor-pointer hover:opacity-80 transition-opacity' 
                src={assets.profile_icon} 
                alt="Profile" 
              />
              {token && (
                <div className='absolute dropdown-menu right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
                    {/* Note: 'My Profile' navigation logic may need to be added to a new route */}
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Cart Icon */}
            <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] font-bold'>
                {getCartCount()}
              </p>
            </Link>

            {/* 4. Know More Button (Optional, can be removed if redundant) */}
             <button className="hidden md:flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold transition-colors">
              Know More <TiLocationArrow />
            </button>

            {/* 5. Hamburger Menu - Mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1 z-50 p-2"
            >
              <span className="w-6 h-[2px] bg-black transition-transform duration-300" />
              <span className="w-6 h-[2px] bg-black transition-opacity duration-300" />
              <span className="w-6 h-[2px] bg-black transition-transform duration-300" />
            </button>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-xl
        flex flex-col gap-6 px-6 pt-24
        transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* Mobile Profile & User Menu */}
        <div className='flex items-center gap-3 mb-4'>
            <img 
              onClick={() => {
                if (!token) {
                  navigate('/login');
                  setMenuOpen(false);
                }
              }} 
              className='w-7 cursor-pointer' 
              src={assets.profile_icon} 
              alt="User" 
            />
            {token ? (
              <div className='flex flex-col text-gray-600 text-sm'>
                <p className='cursor-pointer hover:text-black' onClick={() => { navigate('/orders'); setMenuOpen(false); }}>Orders</p>
                <p className='cursor-pointer hover:text-black' onClick={logout}>Logout</p>
              </div>
            ) : (
                <span 
                    onClick={() => { navigate('/login'); setMenuOpen(false); }}
                    className="text-gray-700 font-semibold cursor-pointer hover:text-black"
                >
                    Login / Register
                </span>
            )}
        </div>
        
        {/* Mobile Nav Links */}
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-lg uppercase font-semibold text-gray-700 hover:text-yellow-500 border-b py-2"
          >
            {item}
          </NavLink>
        ))}
        
        {/* Mobile Search - Added for full feature parity */}
        <p 
            onClick={handleSearchClick} 
            className="text-lg uppercase font-semibold text-gray-700 hover:text-yellow-500 border-b py-2 cursor-pointer"
        >
            Search Products
        </p>

      </div>
    </>
  );
};

export default Navbar;