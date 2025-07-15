import { useEffect, useState } from 'react'

interface HeroSectionProps {
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    urgency: string;
    backgroundImage: string;
  };
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const HeroSection = ({ hero, onOpenCart }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProgram = () => {
    const element = document.getElementById('program')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 sm:pt-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content */}
        <div className={`transform transition-all duration-1000 order-2 lg:order-1 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-none tracking-tight">
            <span className="block">{hero.title}</span>
            <span className="block text-yellow-400 animate-pulse">{hero.highlight}</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-yellow-400 font-semibold">
            {hero.subtitle}
          </p>
          
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button 
              onClick={() => onOpenCart()}
              className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-400/25 hover:bg-yellow-300 w-full sm:w-auto"
            >
              {hero.ctaPrimary}
            </button>
            <button 
              onClick={scrollToProgram}
              className="border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 w-full sm:w-auto"
            >
              {hero.ctaSecondary}
            </button>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center justify-center sm:justify-start">
            <svg className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-center sm:text-left">{hero.urgency}</span>
          </p>
        </div>

        {/* Visual */}
        <div className={`transform transition-all duration-1000 delay-300 order-1 lg:order-2 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="relative group">
            {/* Main Image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src={hero.backgroundImage} 
                alt="Jun Fan Jeet Kune Do Training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-yellow-400 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-bounce">
              EXCLUSIVE
            </div>
            
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-black/80 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-yellow-400/30 max-w-[200px] sm:max-w-none">
              <p className="text-xs sm:text-sm font-medium">Direct Bruce Lee lineage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
