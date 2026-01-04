import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

function Navigation() {
  return (
    <header className="border-b" style={{ borderColor: '#003399', backgroundColor: '#003399' }}>
      <nav className="max-w-content mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <Link to="/" className="brand flex items-center no-underline border-0 hover:opacity-90 transition-opacity">
          <img 
            src={`${BASE_URL}assets/images/full-nobg.png`}
            alt="Euroswarms Research" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto" 
          />
        </Link>
        <div className="links flex gap-4 sm:gap-6 md:gap-8">
          <Link to="/" className="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">
            Home
          </Link>
          <Link to="/projects" className="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">
            Projects
          </Link>
          <Link to="/publications" className="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">
            Publications
          </Link>
          <Link to="/docs" className="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">
            Documentation
          </Link>
          <Link to="/contact" className="text-xs sm:text-sm text-white hover:text-yellow-300 transition-colors font-medium">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
