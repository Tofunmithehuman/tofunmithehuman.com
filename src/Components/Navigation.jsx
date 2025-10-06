import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4 md:p-6">
        <header className="flex items-center justify-between">
          <nav>
            <Link to='/' className="uppercase text-white">Tofunmithehuman®</Link>
          </nav>

          <nav className="hidden md:block">
            <ul className="text-[#777777] flex items-center gap-4 uppercase text-sm">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>

          <nav className="md:hidden block">
            <Menu className="text-white" />
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navigation