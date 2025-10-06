import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4 md:p-6 relative z-50">
        <header className="flex items-center justify-between">
          <nav>
            <Link to='/' className="uppercase text-white">Tofunmithehuman®</Link>
          </nav>

          <nav className="hidden md:block">
            <ul className="text-[#777777] flex items-center gap-4 uppercase text-sm">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>

          <nav className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>
      </div>

      {isOpen && (
        <div className={`fixed inset-0 bg-black/90 z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>
          <ul className="flex flex-col gap-8 uppercase text-lg text-[#777777] text-center">
            <li><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to='/projects' onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navigation