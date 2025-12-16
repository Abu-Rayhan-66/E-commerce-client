

const Navbar = () => {


    return (
        <div>
         <nav className="w-full h-10 bg-white text-black flex items-center justify-between px-4 shadow">
      {/* Logo */}
      <div className="font-semibold text-lg">MyBrand</div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-sm h-7 px-3 border border-gray-300 rounded focus:outline-none"
        />
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 border border-black rounded text-sm">
          Help & Support
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Best Deal
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Contact Us
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Report Problem
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Fast Shipping
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Return policy
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Terms and conditions
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Deal of the day
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          fash shipping
        </button>
        <button className="px-3 py-1 border border-black rounded text-sm">
          Login
        </button>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;

