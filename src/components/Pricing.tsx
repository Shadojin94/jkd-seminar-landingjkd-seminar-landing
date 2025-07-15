import { useEffect, useState } from 'react'

interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  recommended?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  savings?: string;
}

interface PricingProps {
  pricing: {
    currency: string;
    packages: Package[];
    paypalClientId: string;
    urgency: {
      text: string;
      subtext: string;
    };
  };
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

// PayPal buttons removed - now handled in SideCart only

const Pricing = ({ pricing, onOpenCart }: PricingProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown to event
  useEffect(() => {
    const eventDate = new Date('2025-08-30T13:00:00')
    
    const updateCountdown = () => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Event Access
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the package that suits you. Total immersion is recommended.
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500/20 to-yellow-400/20 border border-yellow-400/30 rounded-xl p-6 mb-8">
            <p className="text-2xl font-bold text-white mb-2">{pricing.urgency.text}</p>
            <p className="text-gray-300">{pricing.urgency.subtext}</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            ⏰ Time left until the event
          </h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{item.value}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {pricing.packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`relative group transform transition-all duration-300 hover:-translate-y-2 ${
                pkg.recommended ? 'scale-105 lg:scale-110' : ''
              }`}
            >
              {/* Recommended Badge */}
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-sm tracking-wider">
                    RECOMMENDED
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 shadow-xl group-hover:shadow-2xl ${
                pkg.recommended 
                  ? 'border-yellow-400 shadow-yellow-400/20 group-hover:shadow-yellow-400/30' 
                  : 'border-gray-700 group-hover:border-gray-600'
              }`}>
                {/* Savings Badge */}
                {pkg.savings && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    {pkg.savings}
                  </div>
                )}

                {/* Package Title */}
                <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  {pkg.originalPrice && (
                    <span className="text-gray-500 line-through text-xl mr-2">
                      {pkg.originalPrice}{pricing.currency}
                    </span>
                  )}
                  <span className="text-5xl font-bold text-yellow-400">
                    {pkg.price}{pricing.currency}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    // Determine package type based on price or name
                    const packageType = pkg.price === 100 ? '2days' : '1day';
                    onOpenCart(packageType);
                  }}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 ${
                    pkg.recommended
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg hover:shadow-yellow-400/25'
                      : 'bg-gray-700 text-white hover:bg-gray-600 border-2 border-gray-600 hover:border-gray-500'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-400/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            If you are not completely satisfied with your experience, we will refund you in full within 7 days after the event. Your satisfaction is our absolute priority.
          </p>
        </div>

        {/* Security & Trust */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 mb-6 flex-wrap">
            <div className="flex items-center text-gray-400">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL Secure Payment</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>PayPal Certification</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Your data is protected and your payment is secure. No information is stored on our servers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
