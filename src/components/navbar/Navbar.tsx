

const Navbar = () => {


    return (
        <div>
         <nav className="w-full h-[40px] bg-white text-black flex items-center justify-between px-4 shadow">
      {/* Logo */}
      <div className="font-semibold text-lg">MyBrand</div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-sm h-[28px] px-3 border border-gray-300 rounded focus:outline-none"
        />
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 bg-black text-white rounded text-sm">
          Login
        </button>

        <button className="px-3 py-1 bg-black text-white rounded text-sm">
          Signup
        </button>

        <button className="px-3 py-1 border border-black rounded text-sm">
          Help & Support
        </button>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;

