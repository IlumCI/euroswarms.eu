import { useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b" style={{ borderColor: '#003399', backgroundColor: '#003399' }}>
      <nav className="max-w-content mx-auto px-6 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="brand flex items-center no-underline border-0 hover:opacity-90 transition-opacity">
            <img 
              src={`${BASE_URL}assets/images/full-nobg.png`}
              alt="Euroswarms R&D Division" 
              className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex links gap-6 lg:gap-8">
            <Link to="/" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              About
            </Link>
            <Link to="/crca" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-semibold">
              CR-CA
            </Link>
            <Link to="/projects" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              Projects
            </Link>
            <Link to="/publications" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              Publications
            </Link>
            <Link to="/docs" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              Documentation
            </Link>
            <Link to="/contact" className="text-sm lg:text-base text-white hover:text-yellow-300 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-300 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-400 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/crca" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                CR-CA
              </Link>
              <Link 
                to="/projects" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/publications" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link 
                to="/docs" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-white hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
