import { useState, useEffect } from 'react'
import './App.css'

// Import components
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import WhyUnique from './components/WhyUnique'
import Instructors from './components/Instructors'
import Program from './components/Program'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PayPalScript from './components/PayPalScript'
import SideCart from './components/SideCart'

// Types
export interface EventConfig {
  event: any;
  hero: any;
  whyUnique: any;
  instructors: any[];
  program: any;
  testimonials: any[];
  pricing: any;
  faq: any[];
  socialProof: any;
  contact: any;
}

function App() {
  const [config, setConfig] = useState<EventConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<'1day' | '2days' | null>(null)

  useEffect(() => {
    // Load configuration
    fetch('/data/config.json')
      .then(response => response.json())
      .then(data => {
        setConfig(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading config:', error)
        setLoading(false)
      })

    // Remove any MiniMax branding elements
    const removeMiniMaxBranding = () => {
      const selectors = [
        '[data-minimax]',
        '[class*="minimax"]',
        '[id*="minimax"]',
        '*[title*="MiniMax"]',
        '*[alt*="MiniMax"]'
      ]
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          el.remove()
        })
      })

      // Remove text nodes containing MiniMax
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      )

      const textNodes = []
      let node
      while (node = walker.nextNode()) {
        if (node.textContent && node.textContent.toLowerCase().includes('minimax')) {
          textNodes.push(node)
        }
      }

      textNodes.forEach(textNode => {
        if (textNode.parentNode) {
          textNode.parentNode.removeChild(textNode)
        }
      })
    }

    // Run immediately and then every 100ms for 5 seconds to catch dynamic content
    removeMiniMaxBranding()
    const interval = setInterval(removeMiniMaxBranding, 100)
    setTimeout(() => clearInterval(interval), 5000)
  }, [])

  const openCart = (packageType?: '1day' | '2days') => {
    if (packageType) {
      setSelectedPackage(packageType)
    }
    setIsCartOpen(true)
  }
  const closeCart = () => setIsCartOpen(false)

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-white text-xl font-light">Loading...</p>
        </div>
      </div>
    )
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl">Failed to load</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 font-inter relative">
      <PayPalScript clientId={config.pricing.paypalClientId} />
      <Navigation onOpenCart={openCart} />
      <HeroSection hero={config.hero} onOpenCart={openCart} />
      <EventDetails event={config.event} />
      <WhyUnique whyUnique={config.whyUnique} onOpenCart={openCart} />
      <Instructors instructors={config.instructors} />
      <Program program={config.program} onOpenCart={openCart} />
      <Testimonials testimonials={config.testimonials} onOpenCart={openCart} />
      <Pricing pricing={config.pricing} onOpenCart={openCart} />
      <FAQ faq={config.faq} onOpenCart={openCart} />
      <Footer contact={config.contact} event={config.event} />
      
      {/* Side Cart */}
      <SideCart 
        isOpen={isCartOpen} 
        onClose={closeCart} 
        pricing={config.pricing}
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />
    </div>
  )
}

export default App
