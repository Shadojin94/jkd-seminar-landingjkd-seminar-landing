import { useState, useEffect } from 'react'

interface NavigationProps {
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const Navigation = ({ onOpenCart }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-2xl sm:text-3xl font-bold tracking-wider text-white font-bebas">
              JFJKD
            </span>
            <span className="text-yellow-400 font-bebas text-sm sm:text-lg">SEMINAR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('program')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base"
            >
              Program
            </button>
            <button 
              onClick={() => scrollToSection('instructors')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base"
            >
              Masters
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm lg:text-base"
            >
              Pricing
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => onOpenCart()}
            className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base flex-shrink-0"
          >
            I Reserve
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white ml-2 flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-800 mt-4">
            <button 
              onClick={() => scrollToSection('program')}
              className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors py-2"
            >
              Program
            </button>
            <button 
              onClick={() => scrollToSection('instructors')}
              className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors py-2"
            >
              Masters
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors py-2"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => {
                onOpenCart()
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors mt-4"
            >
              I Reserve
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
