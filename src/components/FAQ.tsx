import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faq: FAQItem[];
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const FAQ = ({ faq, onOpenCart }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            All the answers to your questions to help you make the best decision.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faq.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 sm:p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white pr-4 leading-tight">
                  {item.question}
                </h3>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                  <div className="h-px bg-gradient-to-r from-yellow-400/50 to-transparent mb-4 sm:mb-6"></div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Our team is here to help you. Don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="mailto:junfangungfuacademy@gmail.com"
                className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email us
              </a>
              <a 
                href="tel:+14259988610"
                className="border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-200 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Ready to join the adventure?
          </p>
          <button 
            onClick={() => onOpenCart()}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-400/25 w-full sm:w-auto"
          >
            RESERVE MY SPOT NOW
          </button>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
            Last spots available • Secure payment
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
