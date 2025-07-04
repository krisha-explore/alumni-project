function Header() {
    return (
      <div className="px-6 py-4 bg-[#1A1A40] flex items-center justify-between">
        <img src="/su.png" alt="SU Logo" className="h-10 rounded-b-full" />
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-5 font-[Montserrat]">SCET Nexus</h1>
          <p className="text-xl mt-4 text-green-400">Sarvajanik College of Engineering and Technology</p>
        </div>
        <img src="/scet.png" alt="SCET Logo" className="h-12 w-auto" />
      </div>
    );
  }
  
  export default Header;
  